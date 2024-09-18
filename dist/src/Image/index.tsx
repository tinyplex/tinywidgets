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
 *   onClick={() => alert('Clicked!')}
 *   alt="TinyWidgets"
 * />
 * ```
 * This example shows the `default` variant of the Image component.
 * @example
 * ```tsx
 * <Image
 *   src="/favicon.svg"
 *   variant="logo"
 * />
 * ```
 * This example shows the `logo` variant of the Image component.
 * @example
 * ```tsx
 * <Image
 *   src="/favicon.svg"
 *   variant="avatar"
 * />
 * ```
 * This example shows the `avatar` variant of the Image component.
 * @example
 * ```tsx
 * <Image
 *   src="/favicon.svg"
 *   variant="icon"
 * />
 * ```
 * This example shows the `icon` variant of the Image component.
 */
export const Image = ({
  src,
  onClick,
  variant = 'default',
  className,
  alt,
}: {
  /**
   * The source of the image.
   */
  src: string;
  /**
   * A handler called when the user clicks on the image.
   */
  onClick?: () => void;
  /**
   * A common variant of the image, one of:
   * - default
   * - logo
   * - avatar
   * - icon
   */
  variant?: keyof typeof imageVariant;
  /**
   * An extra CSS class name for the image.
   */
  className?: string;
  /**
   * Alternative text shown when the user hovers over the image.
   */
  alt?: string;
}) => {
  return (
    <img
      src={src}
      onClick={onClick}
      alt={alt}
      className={classNames(image, imageVariant[variant], className)}
    />
  );
};
