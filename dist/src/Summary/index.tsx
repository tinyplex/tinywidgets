import type {ComponentType, ReactNode} from 'react';
import React from 'react';
import {classNames} from '../common/utils';
import {Image} from '../Image';
import {summary, summaryContent, summaryImage} from './index.css';

export const Summary = ({
  icon: Icon,
  src,
  label,
  children,
  className,
}: {
  icon?: ComponentType<{className?: string}>;
  src?: string;
  label: ReactNode;
  children: ReactNode;
  className?: string;
}) => (
  <div className={classNames(summary, className)}>
    {src ? (
      <Image src={src} className={summaryImage} />
    ) : Icon ? (
      <Icon className={summaryImage} />
    ) : null}
    <div className={summaryContent}>
      <h2>{label}</h2>
      {children}
    </div>
  </div>
);