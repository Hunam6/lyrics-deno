import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'

export async function lyrics(song: string) {
  //: Promise<string[][]>
  song = song.replace(/ /g, '+')
  const google = new DOMParser().parseFromString(
    await fetch(`https://www.google.com/search?q=${song}`, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4414.0 Safari/537.36 Edg/90.0.803.0,gzip(gfe)'
      }
    }).then(res => res.text()),
    'text/html'
  )!
  const lyrics = []
  for (let i = 1; i < google.querySelectorAll('.ujudUb').length; i++) {
    const section = []
    for (let j = 0; j < google.querySelectorAll('.ujudUb')[i].children.length; j += 2) {
      section.push(google.querySelectorAll('.ujudUb')[i].children[j].textContent)
    }
    lyrics.push(section)
  }
  return lyrics
}
