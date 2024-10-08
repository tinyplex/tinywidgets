import React from 'react';
import {classNames} from '../../common/functions';
import {hr} from './index.css';

/**
 * The `Hr` component displays a styled horizontal rule.
 *
 * @param props The props for the component.
 * @returns The Hr component.
 * @example
 * ```tsx
 * <Hr />
 * ```
 * This example shows the basic Hr component.
 * @icon Lucide.Minus
 */
export const Hr = ({
  className,
}: {
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
}) => {
  return <hr className={classNames(hr, className)} />;
};
