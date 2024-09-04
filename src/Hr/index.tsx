/** @jsx createElement */

import React from 'react';
import {hr} from './index.css';

const {createElement} = React;

export const Hr = () => {
  return <hr className={hr} />;
};
