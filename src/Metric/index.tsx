/** @jsx createElement */

import React from 'react';
import {classNames} from '../';
import {iconSize} from '../index.css';
import {metric, metricLabel, metricNumber} from './index.css';

const {createElement} = React;

export const Metric = ({
  icon: Icon,
  label,
  number,
  className,
}: {
  icon?: React.ComponentType<{className?: string}>;
  label: React.ReactNode;
  number: React.ReactNode;
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
