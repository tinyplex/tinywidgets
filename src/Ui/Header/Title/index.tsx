/** @jsx createElement */

import { type ReactNode } from 'react';
import { createElement } from '../../../index.ts';
import { title } from './index.css.ts';

export const Title = ({title: titleComponents}: {title: ReactNode}) => {
  return <nav className={title}>{titleComponents}</nav>;
};
