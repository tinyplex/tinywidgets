/** @jsx createElement */

import type {ReactNode} from 'react';
import {createElement} from '../../../../index.ts';
import {footer} from './index.css.ts';

export const Footer = ({footer: footerComponents}: {footer: ReactNode}) => {
  return <footer className={footer}>{footerComponents}</footer>;
};
