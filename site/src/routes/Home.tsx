import React from 'react';
import * as Lucide from 'lucide-react';
import {Hr} from 'tinywidgets';
import {titleStyle} from '../index.css.ts';
import {COMPONENT_ROUTES} from './components/index.tsx';
import {button} from './Home.css.ts';
import {ROUTES} from './index.ts';
import {RouteButton} from './RouteLink.tsx';

export const Home = () => {
  return (
    <>
      <h1 className={titleStyle}>
        <Lucide.Home />
        What is TinyWidgets?
      </h1>
      <p>
        TinyWidgets is a collection of tiny, reusable, React components, all
        optionally wrapped up in a helpful app layout, with header, side bar,
        and dark mode.
      </p>
      <p>
        TinyWidgets uses <a href="https://react.dev/">React</a> for DOM
        manipulation, and <a href="https://tinybase.org">TinyBase</a> for state
        management - such as for supporting dark mode preferences, collapsible
        components, and so on.
      </p>
      <p>
        Overall, the focus is on simplicity, some decent defaults, and concise
        styling. TinyWidgets uses{' '}
        <a href="https://vanilla-extract.style/">Vanilla Extract</a> to ensure
        terse assets and DOM, with zero-runtime cost. (That said, you can also
        bring your own styling methodology, since all components have freeform{' '}
        <code>className</code> props.)
      </p>
      <p></p>
      <p>
        Of course, this site is itself a demo of TinyWidgets, showing off the
        components and layout in action! But check out the individual components
        below.
      </p>
      <Hr />
      <h2>The components</h2>
      {Object.keys(COMPONENT_ROUTES)
        .sort()
        .map((route, key) => {
          return (
            <RouteButton
              route={route}
              variant="default"
              key={key}
              className={button}
            />
          );
        })}
      <Hr />
    </>
  );
};

ROUTES.home = ['Home', Home, Lucide.Home];
