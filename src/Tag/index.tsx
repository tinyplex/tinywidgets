/** @jsx createElement */

import React from 'react';
import {classNames} from '../';
import {Axis} from '../Axis';
import {iconSize} from '../index.css';
import {tag, tagVariant} from './index.css';

const {createElement} = React;

export const Tag = ({
  icon: Icon,
  label,
  title,
  variant = 'default',
}: {
  icon?: React.ComponentType<{className?: string}>;
  label?: React.ReactNode;
  title?: string;
  variant?: keyof typeof tagVariant;
}) => {
  const icon = Icon ? <Icon className={iconSize} /> : null;
  return (
    <Axis className={classNames(tag, tagVariant[variant])} title={title}>
      {icon}
      {label}
    </Axis>
  );
};
