import React from 'react';
import {classNames} from '../common/utils.tsx';
import {image, imageVariant} from './index.css.ts';

/**
 * The Image component displays an image, with a number of common variants.
 *
 * @param props The props for the component.
 * @returns The Image component.
 * @example
 * ```tsx
 * <Image
 *   src="/favicon.svg"
 *   title="TinyWidgets"
 *   onClick={() => alert('Clicked!')}
 * />
 * ```
 * This example shows the `default` variant of the Image component.
 * @example
 * ```tsx
 * <Image
 *   src="/favicon.svg"
 *   title="TinyWidgets"
 *   variant="logo"
 * />
 * ```
 * This example shows the `logo` variant of the Image component.
 * @example
 * ```tsx
 * <Image
 *   src="/favicon.svg"
 *   title="TinyWidgets"
 *   variant="avatar"
 * />
 * ```
 * This example shows the `avatar` variant of the Image component.
 * @example
 * ```tsx
 * <Image
 *   src="/favicon.svg"
 *   title="TinyWidgets"
 *   variant="icon"
 * />
 * ```
 * This example shows the `icon` variant of the Image component.
 */
export const Image = ({
  src,
  title,
  onClick,
  variant = 'default',
  className,
}: {
  /**
   * The source of the image.
   */
  src: string;
  /**
   * A title shown when the user hovers over the component.
   */
  title?: string;
  /**
   * A handler called when the user clicks on the component.
   */
  onClick?: () => void;
  /**
   * A common variant of the component, one of:
   * - default
   * - logo
   * - avatar
   * - icon
   */
  variant?: keyof typeof imageVariant;
  /**
   * An extra CSS class name for the component.
   */
  className?: string;
}) => {
  return (
    <img
      src={src}
      title={title}
      onClick={onClick}
      className={classNames(image, imageVariant[variant], className)}
    />
  );
};
