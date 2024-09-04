/** @jsx createElement */

import type {ReactNode} from 'react';
import {themeDark, themeLight} from '../../index.css.ts';
import {classNames, createElement} from '../../index.ts';
import {useDarkChoice, useDarkPreference} from '../LocalStore.tsx';
import {Header} from './Header/index.tsx';
import {layout} from './index.css.ts';
import {Main} from './Main/index.tsx';

export const Layout = ({
  title,
  topNavLeft,
  topNavRight,
  sideNav,
  article,
  footer,
}: {
  title: ReactNode;
  topNavLeft?: ReactNode;
  topNavRight?: ReactNode;
  sideNav?: ReactNode;
  article?: ReactNode;
  footer?: ReactNode;
}) => {
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
      <Header
        title={title}
        topNavLeft={topNavLeft}
        topNavRight={topNavRight}
        sideNav={sideNav}
      />
      <Main
        article={article}
        footer={footer}
        hasSideNav={sideNav ? true : false}
      />
    </div>
  );
};
