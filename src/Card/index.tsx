/** @jsx createElement */

import React from 'react';
import {classNames} from '../';
import {card} from './index.css';

const {createElement} = React;

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={classNames(card, className)}>{children}</div>;
