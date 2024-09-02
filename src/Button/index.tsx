/** @jsx createElement */
/** @jsxFrag Fragment */

import React from 'react';
import {Row} from '../Row/index.tsx';
import {button} from './index.css.ts';

const {createElement, useCallback} = React;

export const Button = ({
  icon: Icon,
  label,
  labelRight,
  onClick,
  variant = 'default',
  className,
  href,
  title,
}: {
  icon?: React.ComponentType<{size?: string | number}>;
  label?: React.ReactNode;
  labelRight?: React.ReactNode;
  onClick?: () => void;
  variant?: keyof typeof button;
  className?: string;
  href?: string;
  title?: string;
}) => {
  const icon = Icon ? <Icon size={16} /> : null;
  const Left = icon && label ? Row : React.Fragment;
  const hrefClick = useCallback(
    () => (href ? open(href, '_blank', 'noreferrer') : null),
    [href],
  );

  return (
    <button
      className={[button[variant], className].join(' ')}
      onClick={onClick ?? hrefClick}
      title={title}
    >
      <Left>
        {icon}
        {label}
      </Left>
      {labelRight}
    </button>
  );
};
