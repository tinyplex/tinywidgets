/** @jsx createElement */

import type { ReactNode } from 'react';
import { createElement } from '../../../index.ts';
import { topNav } from './index.css.ts';

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
