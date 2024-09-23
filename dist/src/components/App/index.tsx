import type {ComponentType, ReactNode} from 'react';
import React from 'react';
import {Menu, Moon, Sun, SunMoon, X} from 'lucide-react';
import {Provider} from 'tinybase/ui-react';
import {classNames, renderComponentOrNode} from '../../common/functions.tsx';
import {codeDark, codeLight} from '../../css/code.css.ts';
import {colorsDark, colorsLight} from '../../css/colors.css.ts';
import {
  LocalStore,
  useDark,
  useDarkChoice,
  useLocalStoreIsReady,
  useToggleDarkChoiceCallback,
} from '../../stores/LocalStore.tsx';
import {RouteStore, useRouteStoreIsReady} from '../../stores/RouteStore.tsx';
import {
  SessionStore,
  useSessionStoreIsReady,
  useSideNavIsOpen,
  useToggleSideNavIsOpenCallback,
} from '../../stores/SessionStore.tsx';
import {Button} from '../Button/index.tsx';
import {
  app,
  appLayout,
  header,
  main,
  mainHasSideNav,
  sideNav,
  sideNavButton,
  sideNavOpen,
  title,
  topNav,
} from './index.css.ts';

const darkIcons = [Sun, Moon, SunMoon];
const darkChoices = ['Light always', 'Dark always', 'Auto'];

/**
 * The `App` component is the root component of a TinyWidgets application.
 *
 * It can be provided with optional components for different parts of the app
 * layout, including the top left title, the side bar and the main content.
 *
 * If none of these props are present, the TinyWidgets layout won't be used, but
 * you will still be able to enjoy its state management features, and any
 * components within it will be correctly styled.
 * @param props The props for the component.
 * @returns The App component.
 * @example
 * ```tsx
 * <App />
 * ```
 * This shows an empty App, but if you visit [the TinyWidgets
 * website](https://tinywidgets.org) you'll see one in its full glory!
 * @icon Lucide.PanelsTopLeft
 */
export const App = (props: {
  /**
   * An optional component, element, or string which renders the top left title
   * of the application.
   */
  title?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders navigation on the
   * left side of the top navigation bar of the application.
   */
  topNavLeft?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders navigation on the
   * right side of the top navigation bar of the application.
   */
  topNavRight?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders the left side bar
   * of the application.
   */
  sideNav?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders the main part of
   * the application.
   */
  main?: ComponentType | ReactNode;
  /**
   * An extra CSS class name for the component.
   */
  className?: string;
}) => {
  return (
    <Provider>
      <Layout {...props} />
      <SessionStore />
      <LocalStore />
      <RouteStore />
    </Provider>
  );
};

const Layout = ({
  title: titleComponentOrNode,
  topNavLeft: topNavLeftComponentOrNode,
  topNavRight: topNavRightComponentOrNode,
  sideNav: sideNavComponentOrNode,
  main: mainComponentOrNode,
  className,
}: Parameters<typeof App>[0]) => {
  const sessionStoreIsReady = useSessionStoreIsReady();
  const routeStoreIsReady = useRouteStoreIsReady();
  const localStoreIsReady = useLocalStoreIsReady();

  const toggleDarkChoice = useToggleDarkChoiceCallback();

  const toggleSideNavIsOpen = useToggleSideNavIsOpenCallback();
  const sideNavIsOpen = useSideNavIsOpen();

  const darkChoice = useDarkChoice();
  const dark = useDark();

  const hasLayout = [
    titleComponentOrNode,
    topNavLeftComponentOrNode,
    topNavRightComponentOrNode,
    sideNavComponentOrNode,
    mainComponentOrNode,
  ].some((componentOrNode) => componentOrNode);
  const hasSideNav = sideNavComponentOrNode != null;

  return sessionStoreIsReady && routeStoreIsReady && localStoreIsReady ? (
    <div
      className={classNames(
        app,
        hasLayout && appLayout,
        dark ? colorsDark : colorsLight,
        dark ? codeDark : codeLight,
        className,
      )}
    >
      {hasLayout ? (
        <>
          <header className={header}>
            {hasSideNav ? (
              <Button
                variant="icon"
                onClick={toggleSideNavIsOpen}
                icon={sideNavIsOpen ? X : Menu}
                className={sideNavButton}
              />
            ) : null}
            <nav className={title}>
              {renderComponentOrNode(titleComponentOrNode)}
            </nav>
            <nav className={topNav}>
              {renderComponentOrNode(topNavLeftComponentOrNode, <div />)}
              {renderComponentOrNode(topNavRightComponentOrNode, <div />)}
            </nav>
            <Button
              variant="icon"
              onClick={toggleDarkChoice}
              icon={darkIcons[darkChoice]}
              alt={darkChoices[darkChoice]}
            />
            {hasSideNav ? (
              <nav
                className={classNames(sideNav, sideNavIsOpen && sideNavOpen)}
              >
                {renderComponentOrNode(sideNavComponentOrNode)}
              </nav>
            ) : null}
          </header>
          <main className={classNames(main, hasSideNav && mainHasSideNav)}>
            {renderComponentOrNode(mainComponentOrNode)}
          </main>
        </>
      ) : null}
    </div>
  ) : null;
};
