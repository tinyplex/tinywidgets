/** @jsx createElement */
/** @jsxFrag Fragment */

import React from 'react';
import {iconSize} from '../index.css.ts';
import {classNames} from '../index.ts';
import {button, buttonVariant, highlight, labelStyle} from './index.css.ts';

const {createElement, useCallback, forwardRef} = React;

export const Button = forwardRef(
  (
    {
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
      icon?: React.ComponentType<{className?: string}>;
      label?: React.ReactNode;
      labelRight?: React.ReactNode;
      iconRight?: React.ComponentType<{className?: string}>;
      onClick?: () => void;
      variant?: keyof typeof buttonVariant;
      className?: string;
      href?: string;
      title?: string;
      current?: boolean;
    },
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const icon = Icon ? <Icon className={iconSize} /> : null;
    const iconRight = IconRight ? <IconRight className={iconSize} /> : null;

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
        ref={ref}
      >
        {icon}
        {label ? <span className={labelStyle}>{label}</span> : null}
        {labelRight}
        {iconRight}
      </button>
    );
  },
);
