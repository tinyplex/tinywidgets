/** @jsx createElement */

import React, {type ReactNode} from 'react';
import {topNav} from './index.css.ts';

const {createElement} = React;

export const TopNav = ({
  topNavLeft = <div />,
  topNavRight = <div />,
}: {
  topNavLeft?: ReactNode;
  topNavRight?: ReactNode;
}) => (
  <nav className={topNav}>
    {topNavLeft}
    {topNavRight}
  </nav>
);
