/** @jsx createElement */

import React, { type ReactNode } from 'react';
import { Hamburger } from './Hamburger/index.tsx';
import { header } from './index.css.ts';
import { SideBar } from './SideBar/index.tsx';
import { Title } from './Title/index.tsx';
import { TopBar } from './TopBar/index.tsx';

const {createElement} = React;

export const Header = ({
  title,
  topBar,
  sideBar,
}: {
  title: ReactNode;
  topBar: ReactNode;
  sideBar: ReactNode;
}) => {
  return (
    <header className={header}>
      <Hamburger />
      <Title title={title} />
      <TopBar topBar={topBar} />
      <SideBar sideBar={sideBar} />
    </header>
  );
};
