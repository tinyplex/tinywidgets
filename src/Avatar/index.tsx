/** @jsx createElement */

import React from 'react';
import {classNames} from '../index.ts';
import {avatar} from './index.css.ts';

const {createElement} = React;

export const Avatar = ({
  src,
  title,
  onClick,
  className,
}: {
  src: string;
  title?: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <img
      src={src}
      title={title}
      onClick={onClick}
      className={classNames(avatar, className)}
    />
  );
};
