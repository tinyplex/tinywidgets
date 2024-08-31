/** @jsx createElement */

import React, {type ReactNode} from 'react';
import {DarkButton} from './DarkButton/index.tsx';
import {header} from './index.css.ts';
import {SideNav} from './SideNav/index.tsx';
import {SideNavButton} from './SideNavButton/index.tsx';
import {Title} from './Title/index.tsx';
import {TopNav} from './TopNav/index.tsx';

const {createElement} = React;

export const Header = ({
  title,
  topNav,
  sideNav,
}: {
  title: ReactNode;
  topNav?: ReactNode;
  sideNav?: ReactNode;
}) => {
  return (
    <header className={header}>
      {sideNav ? <SideNavButton /> : null}
      <Title title={title} />
      <TopNav topNav={topNav} />
      <DarkButton />
      {sideNav ? <SideNav sideNav={sideNav} /> : null}
    </header>
  );
};
