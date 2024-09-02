/** @jsx createElement */

import React from 'react';
import {classNames} from '../';
import {Axis} from '../Axis';
import {tag, tagVariant} from './index.css';

const {createElement} = React;

export const Tag = ({
  icon: Icon,
  label,
  title,
  variant = 'default',
}: {
  icon?: React.ComponentType<{size?: string | number}>;
  label?: React.ReactNode;
  title?: string;
  variant?: keyof typeof tagVariant;
}) => {
  const icon = Icon ? <Icon size={10} /> : null;
  return (
    <Axis className={classNames(tag, tagVariant[variant])} title={title} flush>
      {icon}
      {label}
    </Axis>
  );
};
