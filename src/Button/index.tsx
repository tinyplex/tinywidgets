/** @jsx createElement */
/** @jsxFrag Fragment */

import React from 'react';
import {classNames} from '../index.ts';
import {button, buttonVariant, highlight, labelStyle} from './index.css.ts';

const {createElement, useCallback, Fragment} = React;

export const Button = ({
  icon: Icon,
  label,
  labelRight,
  iconRight: IconRight,
  onClick,
  variant = 'default',
  className,
  href,
  title,
  current,
}: {
  icon?: React.ComponentType<{size?: string | number; className?: string}>;
  label?: React.ReactNode;
  labelRight?: React.ReactNode;
  iconRight?: React.ComponentType<{size?: string | number; className?: string}>;
  onClick?: () => void;
  variant?: keyof typeof buttonVariant;
  className?: string;
  href?: string;
  title?: string;
  current?: boolean;
}) => {
  const icon = Icon ? <Icon size={16} /> : null;
  const iconRight = IconRight ? <IconRight size={16} /> : null;

  const hrefClick = useCallback(
    () => (href ? open(href, '_blank', 'noreferrer') : null),
    [href],
  );

  return (
    <button
      className={classNames(
        button,
        buttonVariant[variant],
        current && highlight,
        className,
      )}
      onClick={onClick ?? hrefClick}
      title={title}
    >
      {icon}
      {label ? <span className={labelStyle}>{label}</span> : null}
      {labelRight}
      {iconRight}
    </button>
  );
};
