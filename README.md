# lyrics-deno

## A lyrics finder/scraper for Deno

---

### Usage

#### Example

```typescript
import {lyrics} from 'https://deno.land/x/lyrics/mod.ts'
lyrics('radioactive imagine dragons').then((res) => console.log(res))
```

<details><summary>Output</summary>

  ```text
Whoa, oh, oh
Whoa, oh, oh
Whoa, oh, oh
Whoa

I'm waking up to ash and dust
I wipe my brow and I sweat my rust
I'm breathing in the chemicals

I'm breaking in, shaping up, then checking out on the prison bus
This is it, the apocalypse
Whoa

I'm waking up, I feel it in my bones
Enough to make my systems blow
Welcome to the new age, to the new age
Welcome to the new age, to the new age
Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive
Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive

I raise my flags, don my clothes
It's a revolution, I suppose
We'll paint it red to fit right in
Whoa

I'm breaking in, shaping up, then checking out on the prison bus
This is it, the apocalypse
Whoa

I'm waking up, I feel it in my bones
Enough to make my systems blow
Welcome to the new age, to the new age
Welcome to the new age, to the new age
Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive
Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive

All systems go, the sun hasn't died
Deep in my bones, straight from inside

I'm waking up, I feel it in my bones
Enough to make my systems blow
Welcome to the new age, to the new age
Welcome to the new age, to the new age
Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive
Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive
  ```

</details>

#### Doc

```typescript
lyrics(song: string, string: boolean)
```

**|** `song` is the song name, with the artist name or not

**|** `string`*(optional, default = `true`)* `true` for a string output and `false` for an array output

**↳** return the lyrics of the song

### Credits

Thanks [@b-fuze](https://github.com/b-fuze) for it's [Deno DOM](https://github.com/b-fuze/deno-dom).
