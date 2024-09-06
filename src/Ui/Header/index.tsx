/** @jsx createElement */

import type { ReactNode } from 'react';
import { createElement } from '../../index.ts';
import { DarkButton } from './DarkButton/index.tsx';
import { header } from './index.css.ts';
import { SideNav } from './SideNav/index.tsx';
import { SideNavButton } from './SideNavButton/index.tsx';
import { Title } from './Title/index.tsx';
import { TopNav } from './TopNav/index.tsx';

export const Header = ({
  title,
  topNavLeft,
  topNavRight,
  sideNav,
}: {
  title: ReactNode;
  topNavLeft?: ReactNode;
  topNavRight?: ReactNode;
  sideNav?: ReactNode;
}) => {
  return (
    <header className={header}>
      {sideNav ? <SideNavButton /> : null}
      <Title title={title} />
      <TopNav topNavLeft={topNavLeft} topNavRight={topNavRight} />
      <DarkButton />
      {sideNav ? <SideNav sideNav={sideNav} /> : null}
    </header>
  );
};
