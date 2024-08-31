/** @jsx createElement */

import React from 'react';
import { useDarkChoice, useNudgeDarkChoiceCallback } from '../Ui/Store.tsx';
import { darkButton } from './index.css.ts';

export const {createElement} = React;

export const DarkButton = () => {
  return (
    <span
      onClick={useNudgeDarkChoiceCallback()}
      className={darkButton[useDarkChoice()]}
    />
  );
};
