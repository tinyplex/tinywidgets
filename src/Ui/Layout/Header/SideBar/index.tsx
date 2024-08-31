/** @jsx createElement */

import React, { type ReactNode } from 'react';
import { sideBar } from './index.css.ts';

const {createElement} = React;

export const SideBar = ({sideBar: sideBarComponents}: {sideBar: ReactNode}) => {
  return <nav className={sideBar}>{sideBarComponents}</nav>;
};
