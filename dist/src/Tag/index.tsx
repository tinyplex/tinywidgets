import type {ComponentType, ReactNode} from 'react';
import React from 'react';
import {classNames} from '../common/utils';
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
    <div className={classNames(tag, tagVariant[variant])} title={title}>
      {icon}
      {label}
    </div>
  );
};
