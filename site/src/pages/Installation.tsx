import React from 'react';
import * as Lucide from 'lucide-react';
import {Title} from '../components/Title.tsx';
import {ROUTES} from './index.ts';

export const Installation = () => {
  return (
    <>
      <Title>
        <Lucide.WandSparkles />
        Installation
      </Title>
      <p>
        TinyWidgets uses <a href="https://react.dev/">React</a> for DOM
        manipulation,{' '}
        <a href="https://vanilla-extract.style/">Vanilla-Extract</a> for styling
        and theming, <a href="https://lucide.dev/">Lucide</a> for icons, and{' '}
        <a href="https://tinybase.org">TinyBase</a> for state management. Its
        philosophy is all about simplicity, decent defaults, a streamlined DOM,
        and concise styling.
      </p>
      <p>
        But, just to be clear - that doesn't mean <i>you</i> need to use
        Vanilla-Extract, Lucide, or Tinybase in the apps you build with these
        widgets. You can set arbitrary class names (from Tailwind, for example!)
        on all components, for instance.
      </p>
      <p>
        Of course, this site is itself a demo of TinyWidgets, showing off the
        components and layout in action. But check out the individual components
        by navigating the API documentation in the side bar.
      </p>
    </>
  );
};

ROUTES.installation = ['Installation', Installation, Lucide.WandSparkles];
