# TinyWidgets

A collection of tiny, reusable, UI components
— wrapped in a helpful app layout with header, side bar, dark mode, and more.

See the [website](https://tinywidgets.org/) for more details. Get started [here](https://tinywidgets.org/#installation).

<img width="1213" alt="image" src="https://github.com/user-attachments/assets/22b69545-52d5-424d-ab80-084bb87237f4">

---

## Dependencies

TinyWidgets uses [React](https://react.dev/) for DOM manipulation, [Vanilla-Extract](https://vanilla-extract.style/) for styling, [Lucide](https://lucide.dev/) for icons, and [TinyBase](https://tinybase.org/) for state management. Its philosophy is all about simplicity, decent defaults, a streamlined DOM, and concise styling. You can either compile its Vanilla Extract source with your app or use the prebuilt JavaScript and CSS.

But, just to be clear - that doesn't mean you need to use Vanilla-Extract, Lucide, or Tinybase in the apps you build with these widgets. You can set arbitrary class names (from Tailwind, for example!) on all components if you like.

## Meet the family

TinyTick is part of a group of small libraries designed to help make rich client and local-first apps easier to build. Check out the others!

<p>
  <a href='https://tinybase.org' target='_blank'>
    <img width="48" src="https://tinybase.org/favicon.svg" />
    <br/>
    <b>TinyBase</b>
  </a>
  <br />The reactive data store for local-first apps.<br />
</p>

<p>
    <img width="48" src="https://tinywidgets.org/favicon.svg" />
    <br/>
    <b>TinyWidgets</b>
  <br />A collection of tiny, reusable, UI components.<br />
</p>

<p>
  <a href='https://tinytick.org' target='_blank'>
  <img width="48" src="https://tinytick.org/favicon.svg" />
  <br />
  <b>TinyTick</b>
  </a>
  <br />A tiny but very useful task orchestrator.<br />
</p>

## Help out!

This project was created because [I](https://github.com/jamesgpearce) want to be able to build lots of local-first apps quickly and without the overhead of all the app boilerplate each time.

Making it open source seemed like the right thing to do, so please try and it out and get involved. I'll always be interested in issues, more style variants, new components altogether, or even some professional-grade design assistance. I'm not a designer...

See you on [GitHub](https://github.com/tinyplex/tinywidgets)!

## Installation

### Add TinyWidgets to an existing Vite app

Install TinyWidgets:

```sh
npm install tinywidgets
```

Then choose one of the following integration modes. Keep the component, CSS
token, and stylesheet imports within the same mode because their generated class
names and custom properties are compiled together.

#### Prebuilt mode

Use prebuilt mode for the simplest setup. It needs no Vanilla Extract plugin:

```tsx
import 'tinywidgets/prebuilt/styles.css';
import {App, Button} from 'tinywidgets/prebuilt';

export const Root = () => (
  <App
    title="My app"
    main={<Button title="Say hello" onClick={() => alert('Hello!')} />}
  />
);
```

CSS tokens are also available from `tinywidgets/prebuilt/css` if you need them
in inline styles or your own styling code.

#### Source mode

Use source mode when you want TinyWidgets' Vanilla Extract files compiled
alongside your own. Install the build plugin:

```sh
npm install --save-dev @vanilla-extract/vite-plugin
```

Add it to your Vite config, and exclude TinyWidgets from dependency
optimization:

```ts
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
  optimizeDeps: {exclude: ['tinywidgets']},
  plugins: [react(), vanillaExtractPlugin()],
});
```

Your TypeScript config should set `allowImportingTsExtensions` to `true`. Then
import the source styles and widgets:

```tsx
import 'tinywidgets/source/css';
import {App, Button} from 'tinywidgets/source';

export const Root = () => (
  <App
    title="My app"
    main={<Button title="Say hello" onClick={() => alert('Hello!')} />}
  />
);
```

The original `tinywidgets` and `tinywidgets/css` imports remain aliases for
source mode in the 1.x releases. Both modes currently include the same global
`*` reset: border-box sizing, inherited color and font size, and zero margins
and padding. Load exactly one styling lane.

### Start a new app from the template

The easiest way to start a new TinyWidgets app is with its
[Vite template](https://github.com/tinyplex/vite-tinywidgets/). This comes with
the build configuration you need to work with TinyWidgets.

1. Make a copy of this template into a new directory:

```sh
npx tiged tinyplex/vite-tinywidgets my-tinywidgets-app
```

2. Go into the directory:

```sh
cd my-tinywidgets-app
```

3. Install the dependencies:

```sh
npm install
```

4. Run the application:

```sh
npm run dev
```

5. The Vite server should start up. Go to the URL shown and enjoy!

<img width="1160" alt="image" src="https://github.com/user-attachments/assets/073a26dc-4212-4ab0-b5a0-d968ac47342c">

You can also create a production build with `npm run build`.
