import type {ReactNode} from 'react';
import React from 'react';
import {classNames} from '../common/utils';
import {card} from './index.css';

/**
 * The Card component displays a simple rectangular container.
 *
 * @param props The props for the component.
 * @returns Card Row component.
 * @example
 * ```tsx
 * <Card>
 *   <h1>Welcome</h1>
 *   <hr />
 *   <p>We hope you enjoy TinyWidgets</p>
 * </Card>
 * ```
 * This example shows a simple card.
 * @icon Lucide.Square
 */
export const Card = ({
  className,
  children,
}: {
  /**
   * An extra CSS class name for the component.
   */
  className?: string;
  /**
   * The children of the component, that go inside the card.
   */
  children: ReactNode;
}) => <div className={classNames(card, className)}>{children}</div>;
