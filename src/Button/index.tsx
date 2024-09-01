/** @jsx createElement */

import React from 'react';
import {button} from './index.css.ts';

export const {createElement, Fragment} = React;

export const Button = ({
  label,
  onClick,
  variant = 'default',
}: {
  label: string;
  onClick?: () => void;
  variant?: keyof typeof button;
}) => {
  return (
    <button className={button[variant]} onClick={onClick}>
      {label}
    </button>
  );
};
