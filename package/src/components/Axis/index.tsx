import type {ReactNode} from 'react';
import {classNames} from '../../common/functions';
import {axis, axisVariants} from './index.css';

/**
 * The `Axis` component displays its children along a flex axis, aligning them
 * in the center of the cross-axis.
 *
 * This is useful for compact layouts where icons, avatars, images, and text
 * should share a common visual center line, or for stacked layouts that should
 * remain horizontally centered.
 *
 * @param props The props for the component.
 * @returns The Axis component.
 * @example
 * ```tsx
 * <Axis>
 *   <Image src="/favicon.svg" variant="logo" />
 *   TinyWidgets
 * </Axis>
 * ```
 * This example shows a logo image and text aligned along the same
 * horizontal axis.
 * @example
 * ```tsx
 * <Axis variant="vertical">
 *   <Image src="/favicon.svg" variant="logo" />
 *   TinyWidgets
 * </Axis>
 * ```
 * This example shows the same content arranged on a vertical axis.
 * @icon Lucide.AlignCenterHorizontal
 */
export const Axis = ({
  variant = 'horizontal',
  className,
  title,
  children,
}: {
  /**
   * A variant of the axis, one of:
   * - `horizontal`
   * - `vertical`
   */
  readonly variant?: keyof typeof axisVariants;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
  /**
   * Alternative text shown when the user hovers over the component.
   */
  readonly title?: string;
  /**
   * The children of the component, arranged along the selected axis.
   */
  readonly children: ReactNode;
}) => (
  <div
    className={classNames(axis, axisVariants[variant], className)}
    title={title}
  >
    {children}
  </div>
);
