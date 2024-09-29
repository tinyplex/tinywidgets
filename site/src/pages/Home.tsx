import * as Lucide from 'lucide-react';
import {
  COMPONENT_ROUTES,
  CSS_ROUTES,
  FUNCTION_ROUTES,
  HOOK_ROUTES,
  OBJECT_ROUTES,
} from './_api.tsx';
import {Card, Hr, Image, Row} from 'tinywidgets';
import {button, home, hr, logo, narrower, title} from './Home.css.ts';
import {ROUTES} from './index.ts';
import React from 'react';
import {RouteButton} from '../components/RouteLink.tsx';

export const Home = () => {
  return (
    <div className={home}>
      <div className={narrower}>
        <h1 className={title}>
          <Image src="/favicon.svg" variant="logo" className={logo} />
          TinyWidgets
        </h1>
        <p>
          A collection of tiny, reusable, React components, all optionally
          wrapped up in a helpful app layout, with header, side bar, and dark
          mode.
        </p>
      </div>
      <Hr className={hr} />
      <Row>
        <Card>
          <h2>Components</h2>
          {Object.keys(COMPONENT_ROUTES)
            .sort()
            .map((route, key) => (
              <RouteButton
                route={route}
                variant="default"
                key={key}
                className={button}
              />
            ))}
        </Card>
        <Card>
          <h2>Hooks, Functions, & Objects</h2>
          {Object.keys({
            ...HOOK_ROUTES,
            ...FUNCTION_ROUTES,
            ...CSS_ROUTES,
            ...OBJECT_ROUTES,
          })
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
      </Row>

      <Hr className={hr} />
      <div className={narrower}>
        <Image
          // eslint-disable-next-line max-len
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          variant="logo"
          className={logo}
        />
        <Image
          // eslint-disable-next-line max-len
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
          management. Its philosophy is all about simplicity, decent defaults, a
          streamlined DOM, and concise styling.
        </p>
        <p>
          But, just to be clear - that doesn&apos;t mean <i>you</i> need to use
          Vanilla-Extract, Lucide, or Tinybase in the apps you build with these
          widgets. You can set arbitrary class names (from Tailwind, for
          example!) on all components if you like.
        </p>
        <p>
          Of course, this site is itself a demo of TinyWidgets, showing off the
          components and layout in action. But check out the individual
          components by navigating the API documentation in the side bar.
        </p>
      </div>
    </div>
  );
};

ROUTES.home = ['Home', Home, Lucide.Home];
