import React from 'react';
import {App as AppBase, Button, Image, useRoute} from 'tinywidgets';
import {SiGithub} from '@icons-pack/react-simple-icons';
import {article} from './App.css.ts';
import {titleStyle} from './index.css.ts';
import {Home} from './pages/Home.tsx';
import {ROUTES} from './pages/index.ts';
import {SideNav} from './SideNav';

export const App = () => (
  <AppBase
    title={
      <h1 className={titleStyle}>
        <Image src="/favicon.svg" variant="logo" alt="TinyWidgets" />
        TinyWidgets
      </h1>
    }
    topNavRight={
      <Button
        title="GitHub"
        icon={SiGithub}
        href="https://github.com/tinyplex/tinywidgets"
      />
    }
    sideNav={SideNav}
    main={Main}
  />
);

const Main = () => {
  const route = useRoute();

  const Component = ROUTES[route]?.[1] ?? Home;
  return (
    <article className={article}>
      <Component />
    </article>
  );
};
