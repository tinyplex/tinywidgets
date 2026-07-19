import type {MouseEventHandler, ReactNode} from 'react';
import {classNames} from '../../common/functions';
import {axis, axisVariants} from './index.css.ts';

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
  as: Component = 'div',
  variant = 'horizontal',
  className,
  title,
  onClick,
  children,
}: {
  /**
   * The HTML element used to wrap the axis, one of:
   * - `div`
   * - `nav`
   * - `span`
   * - `h1`
   * - `header`
   * - `footer`
   */
  readonly as?: 'div' | 'nav' | 'span' | 'h1' | 'header' | 'footer';
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
   * A handler called when the user clicks on the component.
   */
  readonly onClick?: MouseEventHandler<HTMLElement>;
  /**
   * The children of the component, arranged along the selected axis.
   */
  readonly children: ReactNode;
}) => (
  <Component
    className={classNames(axis, axisVariants[variant], className)}
    title={title}
    onClick={onClick}
  >
    {children}
  </Component>
);
