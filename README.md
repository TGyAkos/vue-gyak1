# tsx-test

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and
disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for
type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the
TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3
`<script setup>` SFCs, check out
the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in
the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## VUE FELADATOK

- Készíts egy bevásárlólistát, ahol a felhasználók hozzáadhatnak új tételeket a listához.

    - A bevásárlólistának tartalmaznia kell a következő információkat:
    - Termék neve
    - Mennyiség
    - Ár
    - Összesen: mennyiség \* ár
    - A felhasználóknak lehetőségük kell legyen a tételek törlésére.
    - A bevásárlólista alján jelenjen meg az összesített ár.
    - A bevásárlólista elemeit tárold egy tömbben, és használj `v-for` direktívát a megjelenítéshez.
    - Használj `v-model`-t az input mezőkhöz.
    - Használj `@click` eseményt a törléshez.
    - Használj `props`-ot a bevásárlólista elemekhez.
    - Használj `v-if`-et az összesített ár megjelenítéséhez.
    - Használj `v-show`-t a törlés gomb megjelenítéséhez.

- Készíts egy egyszerű számlálót, amely lehetővé teszi a felhasználók számára, hogy növeljék vagy csökkentsék az
  értéket.

    - A számlálónak tartalmaznia kell a következő információkat:
    - Érték
    - Növelés gomb
    - Csökkentés gomb
    - Az érték nem lehet kisebb, mint 0.
    - Használj `v-model`-t az értékhez.
    - Használj `@click` eseményeket a növeléshez és csökkentéshez.
    - Használj `v-if`-et az érték ellenőrzéséhez.

- Készíts egy kapcsolót, amely egy gomb megnyomására vált a „Sötét mód” és „Világos mód” között.

    - Használj class bindings-t, hogy TailwindCSS segítségével változtasd a stílust (pl. „bg-gray-800 text-white” és
      „bg-white text-black”).

- Felhasználó lista

    - Készíts egy felhasználó lista alkalmazást, ahol a felhasználók hozzáadhatnak új felhasználókat.
    - A felhasználóknak tartalmazniuk kell a következő információkat:
        - Teljes név
        - E-mail cím
        - Telefonszám
    - Ha a lista üres, egy üzenetet jeleníts meg, amely arra ösztönzi a felhasználót, hogy adjon hozzá új felhasználót.
    - Listázz ki több felhasználót, és stílusold a listát TailwindCSS-szel.

- Készíts egy űrlapot, amelyben a felhasználók beírhatják a nevüket és életkorukat, majd egy gombnyomással beküldhetik
  azt.

    - Kezeld az eseményt egy metódussal, amely a felhasználó adatait kiírja a konzolra.

- Hozz létre egy szülő- és egy gyermekkomponenst. A szülő komponens küldje át a felhasználó nevét és korát a gyermek
  komponensnek props-on keresztül.

    - A gyermek komponens jelenítse meg a kapott adatokat.

- Hozz létre egy saját input komponenst, amely a v-model segítségével kétirányú adatkapcsolást valósít meg.