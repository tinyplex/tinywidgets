/** @jsx createElement */
/** @jsxFrag Fragment */

import type {ComponentType, ReactNode, Ref} from 'react';
import {iconSize} from '../index.css.ts';
import {classNames, createElement, forwardRef, useCallback} from '../index.ts';
import {button, buttonVariant, highlight, labelStyle} from './index.css.ts';

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
      icon?: ComponentType<{className?: string}>;
      label?: ReactNode;
      labelRight?: ReactNode;
      iconRight?: ComponentType<{className?: string}>;
      onClick?: () => void;
      variant?: keyof typeof buttonVariant;
      className?: string;
      href?: string;
      title?: string;
      current?: boolean;
    },
    ref: Ref<HTMLButtonElement>,
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
