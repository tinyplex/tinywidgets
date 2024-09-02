/** @jsx createElement */

import React, {type ReactNode} from 'react';
import {useSideNav} from '../../../SessionStore.tsx';
import {sideNav} from './index.css.ts';

const {createElement} = React;

export const SideNav = ({sideNav: sideNavComponents}: {sideNav: ReactNode}) => {
  return (
    <nav className={sideNav[useSideNav() ? 1 : 0]}>{sideNavComponents}</nav>
  );
};
