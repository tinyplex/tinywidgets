import {SiGithub} from '@icons-pack/react-simple-icons';
import {useCallback} from 'react';
import {
  App as AppBase,
  Button,
  Image,
  ImageLabel,
  useRoute,
  useSetRouteCallback,
} from 'tinywidgets/source';
import {article, title} from './App.css';
import {Footer} from './components/Footer.tsx';
import {SideNav} from './components/SideNav.tsx';
import {Home} from './pages/Home.tsx';
import {ROUTES} from './pages/index.ts';

export const App = () => (
  <AppBase
    title={Title}
    topNavRight={
      <Button
        icon={SiGithub}
        href="https://github.com/tinyplex/tinywidgets"
        variant="icon"
      />
    }
    sideNav={SideNav}
    main={Main}
    footer={Footer}
  />
);

const Title = () => {
  const setRoute = useSetRouteCallback();
  const setHome = useCallback(() => setRoute('home'), [setRoute]);
  return (
    <ImageLabel
      as="h1"
      className={title}
      onClick={setHome}
      image={<Image src="/favicon.svg" variant="logo" alt="TinyWidgets" />}
      text="TinyWidgets"
    />
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
