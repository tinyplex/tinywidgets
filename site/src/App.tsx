import {
  App as AppBase,
  Button,
  Image,
  useRoute,
  useSetRouteCallback,
} from 'tinywidgets';
import React, {useCallback} from 'react';
import {article, title} from './App.css';
import {Home} from './pages/Home.tsx';
import {ROUTES} from './pages/index.ts';
import {SiGithub} from '@icons-pack/react-simple-icons';
import {SideNav} from './components/SideNav.tsx';

export const App = () => (
  <AppBase
    title={Title}
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

const Title = () => {
  const setRoute = useSetRouteCallback();
  const setHome = useCallback(() => setRoute(''), [setRoute]);
  return (
    <h1 className={title} onClick={setHome}>
      <Image src="/favicon.svg" variant="logo" alt="TinyWidgets" />
      TinyWidgets
    </h1>
  );
};

const Main = () => {
  const route = useRoute();

  const Component = ROUTES[route]?.[1] ?? Home;
  return (
    <article className={article}>
      <Component />
    </article>
  );
};
