import * as Lucide from 'lucide-react';
import {
  COMPONENT_ROUTES,
  CSS_ROUTES,
  FUNCTION_ROUTES,
  HOOK_ROUTES,
  OBJECT_ROUTES,
} from './_api.tsx';
import {Card, Hr, Image, Metric, Row} from 'tinywidgets';
import {SiCss3, SiJavascript} from '@icons-pack/react-simple-icons';
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
          A collection of <a href="#sizes">tiny</a>, reusable, UI components
          <br />
          &mdash; wrapped in a helpful app layout with header, side bar, dark
          mode, and more.
        </p>
        <RouteButton
          title="Get Started"
          route="installation"
          variant="accent"
        />{' '}
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
          href="https://react.dev/"
          className={logo}
        />
        <Image
          // eslint-disable-next-line max-len
          src="https://raw.githubusercontent.com/vanilla-extract-css/vanilla-extract/refs/heads/master/site/logo.svg"
          variant="logo"
          href="https://vanilla-extract.style/"
          className={logo}
        />
        <Image
          src="https://lucide.dev/logo.light.svg"
          variant="logo"
          href="https://lucide.dev/"
          className={logo}
        />
        <Image
          src="https://tinybase.org/favicon.svg"
          variant="logo"
          href="https://tinybase.org"
          className={logo}
        />
        <p>
          TinyWidgets uses <a href="https://react.dev/">React</a> for DOM
          manipulation,{' '}
          <a href="https://vanilla-extract.style/">Vanilla-Extract</a> at
          build-time for styling, <a href="https://lucide.dev/">Lucide</a> for
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
          components and layout in action. Check out the individual components
          by navigating the API documentation in the side bar.
        </p>
      </div>
      <Hr className={hr} />
      <h2 id="sizes">GZipped Dependencies</h2>
      <Row variant="1|1|1|1">
        <Card>
          <Metric title="TinyWidgets (CSS)" number="2.20kB" icon={SiCss3} />
        </Card>
        <Card>
          <Metric
            title="TinyWidgets (JS)"
            number="3.99kB"
            icon={SiJavascript}
          />
        </Card>
        <Card>
          <Metric title="TinyBase" number="12.71kB" icon={SiJavascript} />
        </Card>
        <Card>
          <Metric title="React" number="45.26kB" icon={SiJavascript} />
        </Card>
      </Row>
      <Hr className={hr} />
      <div className={narrower}>
        <h2 id="sizes">Help out!</h2>
        <p>
          This project was created because{' '}
          <a href="https://github.com/jamesgpearce">I</a> want to be able to
          build lots of local-first apps quickly and without the overhead of all
          the app boilerplate each time.
        </p>
        <p>
          Making it open source seemed like the right thing to do, so please try
          and it out and get involved. I&apos;ll always be interested in issues,
          more style variants, new components altogether, or even some
          professional-grade design assistance. I&apos;m not a designer...
        </p>
        <p>
          See you on{' '}
          <a href="https://github.com/tinyplex/tinywidgets">GitHub</a>!
        </p>
      </div>
    </div>
  );
};

ROUTES.home = ['Home', Home, Lucide.Home];
