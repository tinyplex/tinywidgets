import React from 'react';
import {App as AppBase, Button, Card, Image} from 'tinywidgets';
import {useRoute} from 'tinywidgets/utils';
import {SiGithub} from '@icons-pack/react-simple-icons';
import {article} from './App.css.ts';
import {Home} from './routes/Home.tsx';
import {ROUTES} from './routes/index.ts';
import {SideNav} from './SideNav';

export const App = () => (
  <AppBase
    title={
      <>
        <Image src="/favicon.svg" variant="logo" alt="TinyWidgets" />
        <h1>TinyWidgets</h1>
      </>
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
  const Route = ROUTES[useRoute()]?.[1] ?? Home;
  return (
    <Card className={article}>
      <Route />
    </Card>
  );
};
