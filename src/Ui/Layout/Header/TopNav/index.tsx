/** @jsx createElement */

import React, { type ReactNode } from 'react';
import { topNav } from './index.css.ts';

const {createElement} = React;

export const TopNav = ({topNav: topNavComponents}: {topNav: ReactNode}) => {
  return <nav className={topNav}>{topNavComponents}</nav>;
};
