# TinyWidgets

A collection of tiny, reusable, UI components
— wrapped in a helpful app layout with header, side bar, dark mode, and more.

See the [website](https://tinywidgets.org/) for more details. Get started [here](https://tinywidgets.org/#installation).

<img width="1214" alt="image" src="https://github.com/user-attachments/assets/14da6ca1-86b8-4bfd-8d82-8e103ea2ae37">

---

## Dependencies

TinyWidgets uses [React](https://react.dev/) for DOM manipulation, [Vanilla-Extract](https://vanilla-extract.style/) at build-time for styling, [Lucide](https://lucide.dev/) for icons, and [TinyBase](https://tinybase.org/) for state management. Its philosophy is all about simplicity, decent defaults, a streamlined DOM, and concise styling.

But, just to be clear - that doesn't mean you need to use Vanilla-Extract, Lucide, or Tinybase in the apps you build with these widgets. You can set arbitrary class names (from Tailwind, for example!) on all components if you like.

## Help out!

This project was created because [I](https://github.com/jamesgpearce) want to be able to build lots of local-first apps quickly and without the overhead of all the app boilerplate each time.

Making it open source seemed like the right thing to do, so please try and it out and get involved. I'll always be interested in issues, more style variants, new components altogether, or even some professional-grade design assistance. I'm not a designer...

See you on [GitHub](https://github.com/tinyplex/tinywidgets)!

## Installation

The easiest way to get started with TinyWidgets is to use its [Vite template](https://github.com/tinyplex/vite-tinywidgets/). This comes with the (simple) build configuration you need to work with TinyWidgets.

To create a new TinyWidgets application using this template, do the following:

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

5. The Vite server should start up. Go the URL shown and enjoy!

Note that you can also create a production build with `npm run build`.

The Vite server should start up. Go the URL shown and enjoy!

<img width="1160" alt="image" src="https://github.com/user-attachments/assets/073a26dc-4212-4ab0-b5a0-d968ac47342c">

Note that you can also create a production build with `npm run build`.
