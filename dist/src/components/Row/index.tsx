import type {ReactNode} from 'react';
import React from 'react';
import {classNames} from '../../css/render';
import {row, rowVariants} from './index.css';

/**
 * The Row component displays a row of 'cell' components, with a number of
 * common variants representing the relative sizes of those cells within it.
 *
 * @param props The props for the component.
 * @returns The Row component.
 * @example
 * ```tsx
 * <Row>
 *   <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
 *   <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
 * </Row>
 * ```
 * This example shows the default `1|1` variant of the Row component.
 * @example
 * ```tsx
 * <Row variant="1|2">
 *   <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
 *   <div style={{background: 'oklch(50% 0.11 180)'}}>2</div>
 * </Row>
 * ```
 * This example shows the `1|2` variant of the Row component.
 * @example
 * ```tsx
 * <Row variant="2|1">
 *   <div style={{background: 'oklch(50% 0.11 0)'}}>2</div>
 *   <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
 * </Row>
 * ```
 * This example shows the `2|1` variant of the Row component.
 * @example
 * ```tsx
 * <Row variant="1|1|1">
 *   <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
 *   <div style={{background: 'oklch(50% 0.11 120)'}}>1</div>
 *   <div style={{background: 'oklch(50% 0.11 240)'}}>1</div>
 * </Row>
 * ```
 * This example shows the `1|1|1` variant of the Row component.
 * @example
 * ```tsx
 * <Row variant="1|3">
 *   <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
 *   <div style={{background: 'oklch(50% 0.11 180)'}}>3</div>
 * </Row>
 * ```
 * This example shows the `1|3` variant of the Row component.
 * @example
 * ```tsx
 * <Row variant="3|1">
 *   <div style={{background: 'oklch(50% 0.11 0)'}}>3</div>
 *   <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
 * </Row>
 * ```
 * This example shows the `3|1` variant of the Row component.
 * @example
 * ```tsx
 * <Row variant="1|1|1|1">
 *   <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
 *   <div style={{background: 'oklch(50% 0.11 90)'}}>1</div>
 *   <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
 *   <div style={{background: 'oklch(50% 0.11 270)'}}>1</div>
 * </Row>
 * ```
 * This example shows the `1|1|1|1` variant of the Row component.
 * @icon Lucide.Columns3
 */
export const Row = ({
  variant = '1|1',
  className,
  children,
}: {
  /**
   * A variant of the row, representing the relative 'cell' sizes within it, one
   * of:
   * - `1|1`
   * - `1|2`
   * - `2|1`
   * - `1|1|1`
   * - `1|3`
   * - `3|1`
   * - `1|1|1|1`
   */
  variant?: keyof typeof rowVariants;
  /**
   * An extra CSS class name for the component.
   */
  className?: string;
  /**
   * The children of the component, each occupying one 'cell'.
   */
  children: ReactNode;
}) => {
  return (
    <div className={classNames(row, rowVariants[variant], className)}>
      {children}
    </div>
  );
};
