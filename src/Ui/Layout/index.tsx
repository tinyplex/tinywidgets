/** @jsx createElement */

import React, { type ReactNode } from 'react';
import { Header } from '../Header/index.tsx';
import { Main } from '../Main/index.tsx';
import { useDarkChoice, useDarkPreference } from '../Store.tsx';
import { layoutTheme } from './index.css.ts';

const {createElement} = React;

export const Layout = ({
  title,
  topBar,
  sideBar,
  article,
  footer,
}: {
  title: ReactNode;
  topBar: ReactNode;
  sideBar: ReactNode;
  article: ReactNode;
  footer: ReactNode;
}) => {
  const darkPreference = useDarkPreference();
  const darkChoice = useDarkChoice();
  const dark = darkChoice == 1 || (darkChoice == 2 && darkPreference) ? 1 : 0;
  return (
    <div className={layoutTheme[dark]}>
      <Header title={title} topBar={topBar} sideBar={sideBar} />
      <Main article={article} footer={footer} />
    </div>
  );
};
