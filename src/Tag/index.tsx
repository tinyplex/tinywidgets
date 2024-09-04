/** @jsx createElement */

import type {ComponentType, ReactNode} from 'react';
import {classNames, createElement} from '../';
import {Axis} from '../Axis';
import {tag, tagIcon, tagVariant} from './index.css';

export const Tag = ({
  icon: Icon,
  label,
  title,
  variant = 'default',
}: {
  icon?: ComponentType<{className?: string}>;
  label?: ReactNode;
  title?: string;
  variant?: keyof typeof tagVariant;
}) => {
  const icon = Icon ? <Icon className={tagIcon} /> : null;
  return (
    <Axis className={classNames(tag, tagVariant[variant])} title={title}>
      {icon}
      {label}
    </Axis>
  );
};
