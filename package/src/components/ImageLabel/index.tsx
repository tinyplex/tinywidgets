import type {ComponentType, MouseEventHandler, ReactNode} from 'react';
import {classNames, renderComponentOrNode} from '../../common/functions';
import {Axis} from '../Axis';
import {imageLabel} from './index.css';

/**
 * The `ImageLabel` component displays an image and a text label along a shared
 * horizontal axis.
 *
 * It is useful for common UI patterns such as brand marks, avatars with names,
 * or any compact media-and-label combination.
 *
 * @param props The props for the component.
 * @returns The ImageLabel component.
 * @example
 * ```tsx
 * <ImageLabel
 *   image={<Image src="/favicon.svg" variant="avatar" />}
 *   text="TinyWidgets"
 * />
 * ```
 * This example shows a logo image with a text label.
 * @example
 * ```tsx
 * <ImageLabel
 *   as="h1"
 *   image={<Image src="/favicon.svg" variant="logo"/>}
 *   text={<b>TinyWidgets</b>}
 * />
 * ```
 * This example shows the component used as a heading with rich text content.
 * @icon Lucide.Captions
 */
export const ImageLabel = ({
  as = 'div',
  image,
  text,
  className,
  onClick,
}: {
  /**
   * The HTML element used to wrap the image label, one of:
   * - `div`
   * - `nav`
   * - `span`
   * - `h1`
   * - `header`
   * - `footer`
   */
  readonly as?: 'div' | 'nav' | 'span' | 'h1' | 'header' | 'footer';
  /**
   * A component or element which renders the image for the label.
   */
  readonly image: ComponentType | ReactNode;
  /**
   * A component, element, or string which renders the label text.
   */
  readonly text: ComponentType | ReactNode;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
  /**
   * A handler called when the user clicks on the component.
   */
  readonly onClick?: MouseEventHandler<HTMLElement>;
}) => (
  <Axis as={as} className={classNames(imageLabel, className)} onClick={onClick}>
    {renderComponentOrNode(image)}
    {renderComponentOrNode(text)}
  </Axis>
);
