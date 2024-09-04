/** @jsx createElement */

import React from 'react';
import {classNames} from '../';
import {Avatar} from '../Avatar';
import {summary, summaryContent, summaryImage} from './index.css';

const {createElement} = React;

export const Summary = ({
  icon: Icon,
  src,
  label,
  children,
  className,
}: {
  icon?: React.ComponentType<{className?: string}>;
  src?: string;
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames(summary, className)}>
    {src ? (
      <Avatar src={src} className={summaryImage} />
    ) : Icon ? (
      <Icon className={summaryImage} />
    ) : null}
    <div className={summaryContent}>
      <h2>{label}</h2>
      {children}
    </div>
  </div>
);
