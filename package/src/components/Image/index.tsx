import React, {useCallback} from 'react';
import {clickable, image, imageVariants} from './index.css.ts';
import {classNames} from '../../common/functions.tsx';

/**
 * The `Image` component displays an image, with a number of common variants.
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
 * @icon Lucide.Image
 */
export const Image = ({
  src,
  onClick,
  variant = 'default',
  href,
  alt,
  className,
}: {
  /**
   * The source of the image.
   */
  readonly src: string;
  /**
   * A handler called when the user clicks on the image.
   */
  readonly onClick?: () => void;
  /**
   * A variant of the image, one of:
   * - `default`
   * - `logo`
   * - `avatar`
   * - `icon`
   */
  readonly variant?: keyof typeof imageVariants;
  /**
   * A URL that can be used instead of an `onClick` to launch a new web
   * page, much like a link.
   */
  readonly href?: string;
  /**
   * Alternative text shown when the user hovers over the image.
   */
  readonly alt?: string;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
}) => {
  const hrefClick = useCallback(
    () => (href ? open(href, '_blank', 'noreferrer') : null),
    [href],
  );

  return (
    <img
      src={src}
      onClick={onClick ?? hrefClick}
      title={alt}
      className={classNames(
        image,
        imageVariants[variant],
        (onClick || href) && clickable,
        className,
      )}
    />
  );
};
