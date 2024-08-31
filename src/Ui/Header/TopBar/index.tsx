/** @jsx createElement */

import React, { type ReactNode } from 'react';
import { topBar } from './index.css.ts';

const {createElement} = React;

export const TopBar = ({topBar: topBarComponents}: {topBar: ReactNode}) => {
  return <nav className={topBar}>{topBarComponents}</nav>;
};
