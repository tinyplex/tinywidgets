/** @jsx createElement */

import React, {type ReactNode} from 'react';
import {useDarkChoice, useDarkPreference} from '../LocalStore.tsx';
import {Header} from './Header/index.tsx';
import {layoutTheme} from './index.css.ts';
import {Main} from './Main/index.tsx';

const {createElement} = React;

export const Layout = ({
  title,
  topNav,
  sideNav,
  article,
  footer,
}: {
  title: ReactNode;
  topNav: ReactNode;
  sideNav: ReactNode;
  article: ReactNode;
  footer: ReactNode;
}) => {
  const darkPreference = useDarkPreference();
  const darkChoice = useDarkChoice();
  const dark = darkChoice == 1 || (darkChoice == 2 && darkPreference) ? 1 : 0;
  return (
    <div className={layoutTheme[dark]}>
      <Header title={title} topNav={topNav} sideNav={sideNav} />
      <Main article={article} footer={footer} />
    </div>
  );
};
