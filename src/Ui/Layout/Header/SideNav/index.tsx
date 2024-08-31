/** @jsx createElement */

import React, {type ReactNode} from 'react';
import {sideNav} from './index.css.ts';

const {createElement} = React;

export const SideNav = ({sideNav: sideNavComponents}: {sideNav: ReactNode}) => {
  return <nav className={sideNav}>{sideNavComponents}</nav>;
};
