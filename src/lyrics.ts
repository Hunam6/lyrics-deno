import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'

export async function lyrics(song: string) {
  song = song.replace(/ /g, '+')
  const doc = new DOMParser().parseFromString(
    await fetch(`https://www.google.com/search?q=${song}`, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4414.0 Safari/537.36 Edg/90.0.803.0,gzip(gfe)'
      }
    }).then(res => res.text()),
    'text/html'
  )!
  const lyrics = []
  for (let i = 1; i < doc.querySelectorAll('.ujudUb').length; i++) {
    const paragraph = []
    for (let j = 0; j < doc.querySelectorAll('.ujudUb')[i].children.length; j += 2) paragraph.push(doc.querySelectorAll('.ujudUb')[i].children[j].textContent)
    lyrics.push(paragraph)
  }
  if (!lyrics.length) {
    const req = await fetch(`https://genius.com/api/search/multi?q=${song}`).then(res => res.json())
    const doc = new DOMParser().parseFromString(
      await fetch(`https://genius.com${req.response.sections[0].hits[0].result.path}`, {
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4414.0 Safari/537.36 Edg/90.0.803.0,gzip(gfe)'
        }
      }).then(res => res.text()),
      'text/html'
    )!
    for (let i = 0; i < doc.querySelectorAll('.jgQsqn').length; i++) {
      if (doc.querySelectorAll('.jgQsqn')[i].textContent !== '') {
        for (let j = 0; j < doc.querySelectorAll('.jgQsqn')[i].children[0].parentElement!.innerHTML.split('<br>').length; j++) {
          lyrics.push(new DOMParser().parseFromString(doc.querySelectorAll('.jgQsqn')[i].children[0].parentElement!.innerHTML.split('<br>')[j], 'text/html')!.textContent)
        }
      }
    }
    const formatedLyrics: any[] = []
    lyrics.forEach((element, index) => {
      if (element === '' || index === 0) formatedLyrics.push([])
      else formatedLyrics[formatedLyrics.length-1].push(element)
    })
    return formatedLyrics
  }
  return lyrics
}
