import {Menu, Moon, Sun, SunMoon, X} from 'lucide-react';
import {
  createContext,
  useContext,
  useRef,
  type ComponentType,
  type ReactNode,
} from 'react';
import * as UiReact from 'tinybase/ui-react/with-schemas';
import type {OptionalSchemas} from 'tinybase/with-schemas';
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
import {Axis} from '../Axis/index.tsx';
import {Button} from '../Button/index.tsx';
import {
  app,
  appLayout,
  footer,
  header,
  main,
  mainHasFooter,
  mainHasSideNav,
  sideNav,
  sideNavButton,
  sideNavOpen,
  title,
  topNav,
} from './index.css.ts';

const {Provider} = UiReact as UiReact.WithSchemas<OptionalSchemas>;

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
  readonly title?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders navigation on the
   * left side of the top navigation bar of the application.
   */
  readonly topNavLeft?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders navigation on the
   * right side of the top navigation bar of the application.
   */
  readonly topNavRight?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders the left side bar
   * of the application.
   */
  readonly sideNav?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders the main part of
   * the application.
   */
  readonly main?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders the footer of
   * the application.
   */
  readonly footer?: ComponentType | ReactNode;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
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

const LayoutContext = createContext<{readonly portal: HTMLDivElement | null}>({
  portal: null,
});
export const usePortal = () => useContext(LayoutContext).portal;

const Layout = ({
  title: titleComponentOrNode,
  topNavLeft: topNavLeftComponentOrNode,
  topNavRight: topNavRightComponentOrNode,
  sideNav: sideNavComponentOrNode,
  main: mainComponentOrNode,
  footer: footerComponentOrNode,
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
    footerComponentOrNode,
  ].some((componentOrNode) => componentOrNode);
  const hasSideNav = sideNavComponentOrNode != null;
  const hasFooter = footerComponentOrNode != null;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={classNames(
        app,
        hasLayout && appLayout,
        dark ? colorsDark : colorsLight,
        dark ? codeDark : codeLight,
        className,
      )}
    >
      {hasLayout ? (
        <LayoutContext.Provider value={{portal: ref.current}}>
          {sessionStoreIsReady && routeStoreIsReady && localStoreIsReady ? (
            <>
              <Axis as="header" className={header}>
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
                <Axis as="nav" className={topNav}>
                  {renderComponentOrNode(topNavLeftComponentOrNode, <div />)}
                  {renderComponentOrNode(topNavRightComponentOrNode, <div />)}
                </Axis>
                <Button
                  variant="icon"
                  onClick={toggleDarkChoice}
                  icon={darkIcons[darkChoice]}
                  alt={darkChoices[darkChoice]}
                />
                {hasSideNav ? (
                  <nav
                    className={classNames(
                      sideNav,
                      sideNavIsOpen && sideNavOpen,
                    )}
                  >
                    {renderComponentOrNode(sideNavComponentOrNode)}
                  </nav>
                ) : null}
              </Axis>
              <main
                className={classNames(
                  main,
                  hasSideNav && mainHasSideNav,
                  hasFooter && mainHasFooter,
                )}
              >
                {renderComponentOrNode(mainComponentOrNode)}
              </main>
              {hasFooter ? (
                <Axis as="footer" className={footer}>
                  {renderComponentOrNode(footerComponentOrNode)}
                </Axis>
              ) : null}
            </>
          ) : null}
        </LayoutContext.Provider>
      ) : null}
    </div>
  );
};
