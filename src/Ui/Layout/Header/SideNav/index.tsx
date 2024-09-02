/** @jsx createElement */

import React, {type ReactNode} from 'react';
import {classNames} from '../../../../index.ts';
import {useSideNav} from '../../../SessionStore.tsx';
import {open, sideNav} from './index.css.ts';

const {createElement} = React;

export const SideNav = ({sideNav: sideNavComponents}: {sideNav: ReactNode}) => {
  return (
    <nav className={classNames(sideNav, useSideNav() && open)}>
      {sideNavComponents}
    </nav>
  );
};
