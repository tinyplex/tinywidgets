import React from 'react';
import {App as AppBase, Image} from 'tinywidgets';
import {useRoute} from 'tinywidgets/utils';
import {article} from './App.css.ts';
import {Home} from './routes/Home.tsx';
import {ROUTES} from './routes/index.ts';
import {SideNav} from './SideNav';

const Title = () => (
  <>
    <Image src="/favicon.svg" title="TinyWidgets" variant="logo" />
    <h1>TinyWidgets</h1>
  </>
);

const TopNavRight = () => <i>TopNavRight</i>;

const Main = () => {
  const Route = ROUTES[useRoute()]?.[1] ?? Home;
  return (
    <article className={article}>
      <Route />
    </article>
  );
};

export const App = () => (
  <AppBase
    title={Title}
    topNavRight={TopNavRight}
    sideNav={SideNav}
    main={Main}
  />
);
