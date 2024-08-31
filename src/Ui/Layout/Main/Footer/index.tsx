/** @jsx createElement */

import React, {type ReactNode} from 'react';
import {footer} from './index.css.ts';

const {createElement} = React;

export const Footer = ({footer: footerComponents}: {footer: ReactNode}) => {
  return <footer className={footer}>{footerComponents}</footer>;
};
