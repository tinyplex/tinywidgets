import {App as AppBase} from 'tinywidgets';
import {logo} from './App.css';

const Title = () => (
  <>
    <img src="/favicon.svg" alt="TinyHub logo" className={logo} />
    <h1>TinyWidgets</h1>
  </>
);

const TopNavLeft = () => <h2>Left</h2>;

const TopNavRight = () => <h2>Right</h2>;

const SideNav = () => <h2>Side</h2>;

const Main = () => <h2>Main</h2>;

export const App = () => {
  return (
    <AppBase
      title={Title}
      topNavLeft={TopNavLeft}
      topNavRight={TopNavRight}
      sideNav={SideNav}
      main={Main}
    />
  );
};
