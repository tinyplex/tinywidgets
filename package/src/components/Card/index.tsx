import React from 'react';
import type {ReactNode} from 'react';
import {card} from './index.css';
import {classNames} from '../../common/functions';

/**
 * The `Card` component displays a simple rectangular container.
 *
 * @param props The props for the component.
 * @returns Card Row component.
 * @example
 * ```tsx
 * <Card>
 *   <h1>Welcome</h1>
 *   <Hr />
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
  readonly className?: string;
  /**
   * The children of the component, that go inside the card.
   */
  readonly children: ReactNode;
}) => <div className={classNames(card, className)}>{children}</div>;
