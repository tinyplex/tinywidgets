/** @jsx createElement */

import React from 'react';
import {row} from '../index.css';

export const {createElement, Fragment} = React;

export const Row = ({children}: {children: React.ReactNode}) => (
  <div className={row}>{children}</div>
);
