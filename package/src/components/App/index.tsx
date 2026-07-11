import {Menu, X} from 'lucide-react';
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
  useLocalStoreIsReady,
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
import {DarkModeButton} from '../DarkModeButton/index.tsx';
import {
  app,
  appLayout,
  footer,
  header,
  main,
  mainHasFooter,
  mainHasSideNav,
  mainHasSideNavNever,
  sideNav,
  sideNavButtonResponsive,
  sideNavNever,
  sideNavOpen,
  sideNavResponsive,
  title,
  topNav,
} from './index.css.ts';

const {Provider} = UiReact as UiReact.WithSchemas<OptionalSchemas>;

type SideNavToggle = 'never' | 'responsive' | 'always';

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
   * An optional component, element, or string which renders the left side
   * navigation of the application.
   */
  readonly sideNav?: ComponentType | ReactNode;
  /**
   * Whether the side navigation can toggle. One of:
   * - `never`: always show the side navigation.
   * - `responsive`: toggle the side navigation on narrow screens only; default.
   * - `always`: toggle the side navigation at all screen widths.
   */
  readonly sideNavToggle?: SideNavToggle;
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
  sideNavToggle = 'responsive',
  main: mainComponentOrNode,
  footer: footerComponentOrNode,
  className,
}: Parameters<typeof App>[0]) => {
  const sessionStoreIsReady = useSessionStoreIsReady();
  const routeStoreIsReady = useRouteStoreIsReady();
  const localStoreIsReady = useLocalStoreIsReady();

  const toggleSideNavIsOpen = useToggleSideNavIsOpenCallback();
  const sideNavIsOpen = useSideNavIsOpen();

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
  const sideNavCanToggle = hasSideNav && sideNavToggle != 'never';
  const sideNavIsAlwaysVisible = hasSideNav && sideNavToggle == 'never';

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
                {sideNavCanToggle ? (
                  <Button
                    variant="icon"
                    onClick={toggleSideNavIsOpen}
                    icon={sideNavIsOpen ? X : Menu}
                    className={
                      sideNavToggle == 'responsive'
                        ? sideNavButtonResponsive
                        : undefined
                    }
                  />
                ) : null}
                <nav className={title}>
                  {renderComponentOrNode(titleComponentOrNode)}
                </nav>
                <Axis as="nav" className={topNav}>
                  {renderComponentOrNode(topNavLeftComponentOrNode, <div />)}
                  {renderComponentOrNode(topNavRightComponentOrNode, <div />)}
                </Axis>
                <DarkModeButton />
                {hasSideNav ? (
                  <nav
                    className={classNames(
                      sideNav,
                      sideNavToggle == 'responsive' && sideNavResponsive,
                      sideNavIsAlwaysVisible && sideNavNever,
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
                  hasSideNav &&
                    (sideNavToggle == 'never'
                      ? mainHasSideNavNever
                      : sideNavToggle == 'responsive'
                        ? mainHasSideNav
                        : false),
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
