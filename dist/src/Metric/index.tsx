import type {ComponentType, ReactNode} from 'react';
import React from 'react';
import {iconSize} from '../common/dimensions.css';
import {classNames} from '../common/utils';
import {metric, metricLabel, metricNumber} from './index.css';

export const Metric = ({
  icon: Icon,
  label,
  number,
  className,
}: {
  icon?: ComponentType<{className?: string}>;
  label: ReactNode;
  number: ReactNode;
  className?: string;
}) => (
  <div className={classNames(metric, className)}>
    <div className={metricLabel}>
      {Icon ? <Icon className={iconSize} /> : null}
      {label}
    </div>
    <div className={metricNumber}>{number}</div>
  </div>
);
