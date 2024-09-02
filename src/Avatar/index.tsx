/** @jsx createElement */

import React from 'react';
import {avatar} from './index.css.ts';

const {createElement} = React;

export const Avatar = ({
  src,
  title,
  onClick,
}: {
  src: string;
  title?: string;
  onClick?: () => void;
}) => {
  return <img src={src} title={title} onClick={onClick} className={avatar} />;
};
