import * as Lucide from 'lucide-react';
import {Code, Collapsible, Image} from 'tinywidgets';
import {Title} from '../components/Title.tsx';
import {image} from './Installation.css.ts';
import {ROUTES} from './index.ts';

export const Installation = () => {
  return (
    <>
      <Title icon={Lucide.WandSparkles} title="Installation" />
      <h2>Add TinyWidgets to an existing Vite app</h2>
      <p>Install TinyWidgets and its Vanilla Extract build plugin:</p>
      <Code
        language="sh"
        code={`npm install tinywidgets
npm install --save-dev @vanilla-extract/vite-plugin`}
      />
      <p>
        Add the Vanilla Extract plugin to your Vite config, and exclude
        TinyWidgets from dependency optimization:
      </p>
      <Code
        language="typescript"
        code={`import {
  vanillaExtractPlugin,
} from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
  optimizeDeps: {exclude: ['tinywidgets']},
  plugins: [react(), vanillaExtractPlugin()],
});`}
      />
      <p>Then import the global styles and render your first widgets:</p>
      <Code
        language="tsx"
        code={`import 'tinywidgets/css';
import {App, Button} from 'tinywidgets';

export const Root = () => (
  <App
    title="My app"
    main={<Button title="Say hello" onClick={() => alert('Hello!')} />}
  />
);`}
      />
      <h2>Start a new app from the template</h2>
      <p>
        The easiest way to start a new TinyWidgets app is with its{' '}
        <a href="https://github.com/tinyplex/vite-tinywidgets/">
          Vite template
        </a>
        . This comes with the build configuration you need to work with
        TinyWidgets.
      </p>
      <Image
        src="https://github.com/user-attachments/assets/073a26dc-4212-4ab0-b5a0-d968ac47342c"
        href="https://github.com/tinyplex/vite-tinywidgets/"
        className={image}
      />
      <p>
        To create a new TinyWidgets application using this template, do the
        following:
      </p>
      <Collapsible
        id="installation1"
        title="1. Make a copy of this template into a new directory"
        startOpen
        icon={Lucide.SquareTerminal}
      >
        <Code
          language="sh"
          code="npx tiged tinyplex/vite-tinywidgets my-tinywidgets-app"
        />
      </Collapsible>
      <Collapsible
        id="installation2"
        title="2. Go into the directory"
        startOpen
        icon={Lucide.SquareTerminal}
      >
        <Code language="sh" code="cd my-tinywidgets-app" />
      </Collapsible>
      <Collapsible
        id="installation3"
        title="3. Install the dependencies"
        startOpen
        icon={Lucide.SquareTerminal}
      >
        <Code language="sh" code="npm install" />
      </Collapsible>
      <Collapsible
        id="installation4"
        title="4. Run the application"
        startOpen
        icon={Lucide.SquareTerminal}
      >
        <Code language="sh" code="npm run dev" />
        <p>The Vite server should start up. Go the URL shown and enjoy!</p>
      </Collapsible>
      <p>
        Note that you can also create a production build with{' '}
        <code>npm run build</code>.
      </p>
    </>
  );
};

ROUTES.installation = ['Installation', Installation, Lucide.WandSparkles];
