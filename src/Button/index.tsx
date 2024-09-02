/** @jsx createElement */
/** @jsxFrag Fragment */

import React from 'react';
import {classNames} from '../index.ts';
import {Row} from '../Row/index.tsx';
import {button, buttonVariant, highlight} from './index.css.ts';

const {createElement, useCallback} = React;

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
  icon?: React.ComponentType<{size?: string | number}>;
  label?: React.ReactNode;
  labelRight?: React.ReactNode;
  iconRight?: React.ComponentType<{size?: string | number}>;
  onClick?: () => void;
  variant?: keyof typeof buttonVariant;
  className?: string;
  href?: string;
  title?: string;
  current?: boolean;
}) => {
  const icon = Icon ? <Icon size={16} /> : null;
  const Left = icon && label ? Row : React.Fragment;

  const iconRight = IconRight ? <IconRight size={16} /> : null;
  const Right = iconRight && labelRight ? Row : React.Fragment;

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
      <Left>
        {icon}
        {label}
      </Left>
      <Right>
        {labelRight}
        {iconRight}
      </Right>
    </button>
  );
};
