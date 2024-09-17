import type {ReactNode} from 'react';
import React from 'react';
import {classNames} from '../common/utils';
import {card} from './index.css';

export const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={classNames(card, className)}>{children}</div>;
