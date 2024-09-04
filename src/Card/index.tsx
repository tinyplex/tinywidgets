/** @jsx createElement */

import type {ReactNode} from 'react';
import {classNames, createElement} from '../';
import {card} from './index.css';

export const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={classNames(card, className)}>{children}</div>;
