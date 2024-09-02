/** @jsx createElement */

import React from 'react';
import {classNames} from '../';
import {axis, flushStyle, verticalStyle} from './index.css';

const {createElement} = React;

export const Axis = ({
  vertical,
  flush,
  children,
  className,
  title,
}: {
  vertical?: boolean;
  flush?: boolean;
  children: React.ReactNode;
  className?: string;
  title?: string;
}) => {
  return (
    <div
      className={classNames(
        axis,
        vertical && verticalStyle,
        flush && flushStyle,
        className,
      )}
      title={title}
    >
      {children}
    </div>
  );
};
