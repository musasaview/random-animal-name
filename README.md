# random-animal-name

A simple utility for picking random animal names.

## Install

```sh
npm install https://github.com/musasaview/random-animal-name.git
```

## usage

Returns one random animal name object.

```ts
import { randomAnimalName } from "random-animal-name";

const a = randomAnimalName();
// { ja: 'チンチラ', en: 'Chinchilla' }

const cat = randomAnimalName((n) => n.en.includes("Cat"));
// { ja: 'ノルウェージャン', en: 'Norwegian Forest Cat' }
```

Returns an array of random animal name objects.

```ts
import { randomAnimalNames } from "random-animal-name";

const list = randomAnimalNames(5);
// [
//   { ja: 'ミーアキャット', en: 'Meerkat' },
//   { ja: 'オオカミ', en: 'Wolf' },
//   { ja: 'ペルシャ', en: 'Persian' }
// ]

const neko = randomAnimalNames(5, (n) => n.ja.includes("ねこ"));
// [
//   { ja: 'くろねこ', en: 'Black Cat' },
//   { ja: 'みけねこ', en: 'Calico Cat' },
//   { ja: 'くろねこ', en: 'Black Cat' }
// ]
```

all animal list: [animal-names.ts](./src/animal-names.ts)
