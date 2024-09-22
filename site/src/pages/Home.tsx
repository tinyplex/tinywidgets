import React from 'react';
import * as Lucide from 'lucide-react';
import {Card, Hr, Image, Row} from 'tinywidgets';
import {titleStyle} from '../index.css.ts';
import {COMPONENT_ROUTES} from './components/index.tsx';
import {button, home, hr, logo, narrower} from './Home.css.ts';
import {ROUTES} from './index.ts';
import {RouteButton} from './RouteLink.tsx';

export const Home = () => {
  return (
    <div className={home}>
      <div className={narrower}>
        <h1 className={titleStyle}>
          <Image src="/favicon.svg" variant="logo" className={logo} />
          TinyWidgets
        </h1>
        <p>
          TinyWidgets is a collection of tiny, reusable, React components, all
          optionally wrapped up in a helpful app layout, with header, side bar,
          and dark mode.
        </p>
      </div>
      <Hr className={hr} />

      <Row variant="1|1">
        <Card>
          <h2>The Components</h2>
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
        </Card>
        <Card>
          <h2>Utilities</h2>
        </Card>
      </Row>

      <Hr className={hr} />
      <div className={narrower}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          variant="logo"
          className={logo}
        />
        <Image
          src="https://raw.githubusercontent.com/vanilla-extract-css/vanilla-extract/refs/heads/master/site/logo.svg"
          variant="logo"
          className={logo}
        />
        <Image
          src="https://lucide.dev/logo.light.svg"
          variant="logo"
          className={logo}
        />
        <Image
          src="https://tinybase.org/favicon.svg"
          variant="logo"
          className={logo}
        />
        <p>
          TinyWidgets uses <a href="https://react.dev/">React</a> for DOM
          manipulation,{' '}
          <a href="https://vanilla-extract.style/">Vanilla-Extract</a> for
          styling and theming, <a href="https://lucide.dev/">Lucide</a> for
          icons, and <a href="https://tinybase.org">TinyBase</a> for state
          management, and its philosophy is one of simplicity, decent defaults,
          and concise styling.
        </p>
        <p>
          But, just to be clear - that doesn't mean <i>you</i> need to use
          Vanilla-Extract, Lucide, or Tinybase in the apps you build with these
          widgets. You can set arbitrary class names (from Tailwind, for
          example!) on all components, for instance.
        </p>
        <p>
          Of course, this site is itself a demo of TinyWidgets, showing off the
          components and layout in action! But check out the individual
          components by navigating the API documentation in this demo site.
        </p>
      </div>
    </div>
  );
};

ROUTES.home = ['Home', Home, Lucide.Home];