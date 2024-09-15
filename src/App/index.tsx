import type {ComponentType} from 'react';
import React from 'react';
import {Menu, Moon, Sun, SunMoon, X} from 'lucide-react';
import {Provider} from 'tinybase/ui-react';
import {Button} from '../Button/index.tsx';
import {themeDark, themeLight} from '../common/colors.css.ts';
import {classNames} from '../index.ts';
import {
  LocalStore,
  useDarkChoice,
  useDarkPreference,
  useToggleDarkChoiceCallback,
} from '../stores/LocalStore.tsx';
import {
  SessionStore,
  useSideNavOpen,
  useToggleSideNavOpen,
} from '../stores/SessionStore.tsx';
import {
  header,
  layout,
  main,
  mainHasSideNav,
  sideNav,
  sideNavButton,
  sideNavOpen,
  title,
  topNav,
} from './index.css.ts';

type Props = {
  title: ComponentType;
  topNavLeft?: ComponentType;
  topNavRight?: ComponentType;
  sideNav?: ComponentType;
  main?: ComponentType;
};

const darkIcons = [Sun, Moon, SunMoon];

export const App = (props: Props) => {
  return (
    <Provider>
      <Layout {...props} />
      <SessionStore />
      <LocalStore />
    </Provider>
  );
};

const Layout = ({
  title: Title,
  topNavLeft: TopNavLeft,
  topNavRight: TopNavRight,
  sideNav: SideNav,
  main: Main,
}: Props) => {
  const darkPreference = useDarkPreference();
  const darkChoice = useDarkChoice();
  return (
    <div
      className={classNames(
        layout,
        darkChoice == 1 || (darkChoice == 2 && darkPreference)
          ? themeDark
          : themeLight,
      )}
    >
      <header className={header}>
        {sideNav ? (
          <Button
            variant="icon"
            onClick={useToggleSideNavOpen()}
            icon={useSideNavOpen() ? X : Menu}
            className={sideNavButton}
          />
        ) : null}
        <nav className={title}>
          <Title />
        </nav>
        <nav className={topNav}>
          {TopNavLeft ? <TopNavLeft /> : null}
          {TopNavRight ? <TopNavRight /> : null}
        </nav>
        <Button
          variant="icon"
          onClick={useToggleDarkChoiceCallback()}
          icon={darkIcons[useDarkChoice()]}
        />
        {SideNav ? (
          <nav className={classNames(sideNav, useSideNavOpen() && sideNavOpen)}>
            <SideNav />
          </nav>
        ) : null}
      </header>
      <main className={classNames(main, SideNav && mainHasSideNav)}>
        {Main ? <Main /> : null}
      </main>
    </div>
  );
};
