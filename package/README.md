# TinyWidgets

A collection of tiny, reusable, UI components
— wrapped in a helpful app layout with header, side bar, dark mode, and more.

See the [website](https://tinywidgets.org/) for more details.

<img width="1160" alt="image" src="https://github.com/user-attachments/assets/073a26dc-4212-4ab0-b5a0-d968ac47342c">

TinyWidgets uses React for DOM manipulation, Vanilla-Extract for styling and theming, Lucide for icons, and TinyBase for state management. Its philosophy is all about simplicity, decent defaults, a streamlined DOM, and concise styling.

But, just to be clear - that doesn't mean you need to use Vanilla-Extract, Lucide, or Tinybase in the apps you build with these widgets. You can set arbitrary class names (from Tailwind, for example!) on all components if you like.

Of course, this site is itself a demo of TinyWidgets, showing off the components and layout in action. But check out the individual components by navigating the API documentation in the side bar.

## Instructions

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

## License

This template has no license, and so you can use it however you want!
[TinyWidgets](https://github.com/tinyplex/tinywidgets/blob/main/LICENSE) and
[Vite](https://github.com/vitejs/vite/blob/main/LICENSE) themselves are both MIT
licensed.
