import type {ComponentType, ReactNode} from 'react';
import React from 'react';
import {classNames} from '../../common/functions';
import {Image} from '../Image';
import {image, summary} from './index.css';

/**
 * The `Summary` component displays an image on the left, and other content
 * (probably text) on the right.
 *
 * @param props The props for the component.
 * @returns The Summary component.
 * @example
 * ```tsx
 * <Summary src="/favicon.svg">
 *   <h2>TinyWidgets</h2>
 *   <p>Widgets for the modern web.</p>
 * </Summary>
 * ```
 * This example shows a default Summary component.
 * @icon Lucide.LayoutList
 */
export const Summary = ({
  src,
  icon: Icon,
  className,
  children,
}: {
  /**
   * An optional component which renders an icon for the summary, and which
   * must accept a className prop.
   */
  icon?: ComponentType<{className?: string}>;
  /**
   * The source of the image, which used if the `icon` prop is not present.
   */
  src?: string;
  /**
   * An extra CSS class name for the component.
   */
  className?: string;
  /**
   * The children of the component, shown to the right of the image.
   */
  children: ReactNode;
}) => {
  return (
    <div className={classNames(summary, className)}>
      {Icon ? (
        <Icon className={image} />
      ) : src ? (
        <Image src={src} className={image} />
      ) : (
        <div />
      )}
      <div>{children}</div>
    </div>
  );
};
