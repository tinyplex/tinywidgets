/** @jsx createElement */

import React from 'react';
import {
  useDarkChoice,
  useNudgeDarkChoiceCallback,
} from '../../../LocalStore.tsx';
import {darkButton} from './index.css.ts';

export const {createElement} = React;

export const DarkButton = () => {
  return (
    <span
      className={darkButton[useDarkChoice()]}
      onClick={useNudgeDarkChoiceCallback()}
    />
  );
};
