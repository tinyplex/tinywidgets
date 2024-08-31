/** @jsx createElement */

import React from 'react';
import {button} from './index.css.ts';

export const {createElement, Fragment} = React;

export const Button = ({
  label,
  variant = 'default',
}: {
  label: string;
  variant?: keyof typeof button;
}) => {
  return <button className={button[variant]}>{label}</button>;
};
