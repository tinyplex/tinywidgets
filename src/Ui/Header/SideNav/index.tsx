/** @jsx createElement */

import { type ReactNode } from 'react';
import { classNames, createElement } from '../../../index.ts';
import { useSideNavOpen } from '../../../stores/SessionStore.tsx';
import { open, sideNav } from './index.css.ts';

export const SideNav = ({sideNav: sideNavComponents}: {sideNav: ReactNode}) => {
  return (
    <nav className={classNames(sideNav, useSideNavOpen() && open)}>
      {sideNavComponents}
    </nav>
  );
};
