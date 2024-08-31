/** @jsx createElement */
import React from 'react';
import {sideNavButton} from './index.css.ts';

const {createElement} = React;

export const SideNavButton = () => (
  <input className={sideNavButton} type="checkbox" />
);
