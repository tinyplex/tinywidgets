/** @jsx createElement */

import React from 'react';
import {classNames} from '../';
import {axis, gapStyle, justifyStyle, verticalStyle} from './index.css';

const {createElement} = React;

export const Axis = ({
  justify = true,
  gap = true,
  vertical,
  children,
  className,
  title,
}: {
  justify?: boolean;
  gap?: boolean;
  vertical?: boolean;
  children: React.ReactNode;
  className?: string;
  title?: string;
}) => {
  return (
    <div
      className={classNames(
        axis,
        justify && justifyStyle,
        vertical && verticalStyle,
        gap && gapStyle,
        className,
      )}
      title={title}
    >
      {children}
    </div>
  );
};
