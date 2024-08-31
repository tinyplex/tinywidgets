/** @jsx createElement */

import React, { type ReactNode } from 'react';
import { DarkButton } from './DarkButton/index.tsx';
import { Hamburger } from './Hamburger/index.tsx';
import { header } from './index.css.ts';
import { SideBar } from './SideBar/index.tsx';
import { Title } from './Title/index.tsx';
import { TopNav } from './TopNav/index.tsx';

const {createElement} = React;

export const Header = ({
  title,
  topNav,
  sideNav,
}: {
  title: ReactNode;
  topNav: ReactNode;
  sideNav: ReactNode;
}) => {
  return (
    <header className={header}>
      <Hamburger />
      <Title title={title} />
      <TopNav topNav={topNav} />
      <SideBar sideNav={sideNav} />
      <DarkButton />
    </header>
  );
};
