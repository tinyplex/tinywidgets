/** @jsx createElement */
import React from 'react';
import { hamburger } from './index.css.ts';

const {createElement} = React;

export const Hamburger = () => <input className={hamburger} type="checkbox" />;
