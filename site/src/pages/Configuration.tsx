/* eslint-disable max-len */
import 'prismjs';
import * as Lucide from 'lucide-react';
import {Code} from 'tinywidgets';
import {ROUTES} from './index.ts';
import React from 'react';
import {Title} from '../components/Title.tsx';

export const Configuration = () => {
  return (
    <>
      <Title>
        <Lucide.Settings />
        Configuration
      </Title>
      <p>
        Of course you can use the props (or extra CSS class names) on individual
        components to configure them, but there is also a way to make global
        changes to TinyWidgets styles, using CSS variables defined on the{' '}
        <code>:root</code> element.
      </p>
      <p>
        If you need to change any of these, add them to a top-level CSS file.
        These are the variables you can set, and their default values:
      </p>
      <Code
        language="css"
        code={`
:root {
  --tinyWidgets-accentHue: 240;
  --tinyWidgets-backgroundHue: 240;

  --tinyWidgets-logo: 2rem;
  --tinyWidgets-avatar: 2rem;
  --tinyWidgets-icon: 1rem;

  --tinyWidgets-padding: 1rem;
  --tinyWidgets-radius: 0.5rem;

  --tinyWidgets-sideNavWidth: 20rem;
  --tinyWidgets-topNavHeight: 4rem;
}
      `}
      />
      <p>This list will undoubtedly grow as TinyWidgets develops!</p>
      <p>
        The <code>--tinyWidgets-accentHue</code> and{' '}
        <code>--tinyWidgets-backgroundHue</code> variables are used as OKLCH
        parameters for the accented buttons and background tint respectively.
        Hue is in degrees, so the value can be between 0 and 360. Red is 20,
        yellow 90, green 140, blue 220, purple 320. Learn more about OKLCH{' '}
        <a href="https://oklch.com/">here</a>.
      </p>
      <p>The other variables should be self-explanatory.</p>
    </>
  );
};

ROUTES.configuration = ['Configuration', Configuration, Lucide.Settings];
