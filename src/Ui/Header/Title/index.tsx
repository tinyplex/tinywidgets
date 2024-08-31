/** @jsx createElement */

import React, { type ReactNode } from 'react';
import { title } from './index.css.ts';

const {createElement} = React;

export const Title = ({title: titleComponents}: {title: ReactNode}) => {
  return <nav className={title}>{titleComponents}</nav>;
};
