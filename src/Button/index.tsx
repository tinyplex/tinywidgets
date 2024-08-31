/** @jsx createElement */

import React from 'react';
import * as styles from './index.css.ts';

export const {createElement, Fragment} = React;

export const Button = ({label}: {label: string}) => {
  return <button className={styles.root}>{label}</button>;
};
