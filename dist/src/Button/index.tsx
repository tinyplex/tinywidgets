import type {ComponentType, ReactNode, Ref} from 'react';
import React, {forwardRef, useCallback} from 'react';
import {iconSize} from '../common/dimensions.css.ts';
import {classNames, renderComponentOrNode} from '../common/utils.tsx';
import {button, buttonVariant, highlight, titleStyle} from './index.css.ts';

/**
 * The Button component displays an button, with a number of common variants.
 *
 * @param props The props for the component.
 * @returns The Button component.
 * @example
 * ```tsx
 * <Button
 *   title="TinyWidgets"
 *   onClick={() => alert('Clicked!')}
 * />
 * ```
 * This example shows the `default` variant of the Button component.
 * @example
 * ```tsx
 * <Button
 *   title="TinyWidgets"
 *   icon={Lucide.Grid3x3}
 * />
 * ```
 * This example shows the `default` variant of the Button component with a left
 * icon.
 * @example
 * ```tsx
 * <Button
 *   title="TinyWidgets"
 *   iconRight={Lucide.LogIn}
 * />
 * ```
 * This example shows the `default` variant of the Button component with a right
 * icon.
 * @example
 * ```tsx
 * <Button
 *   icon={Lucide.Sun}
 *   title="Sun"
 *   variant="icon"
 * />
 * ```
 * This example shows the `icon` variant of the Button component. It is best
 * used without a title.
 * @example
 * ```tsx
 * <Button
 *   title="TinyWidgets"
 *   variant="accent"
 * />
 * ```
 * This example shows the `accent` variant of the Button component.
 * @example
 * ```tsx
 * <Button
 *   title="TinyWidgets"
 *   variant="ghost"
 * />
 * ```
 * This example shows the `ghost` variant of the Button component.
 * @example
 * ```tsx
 * <Button
 *   variant="item"
 *   icon={Lucide.Grid3x3}
 *   title="TinyWidgets"
 *   titleRight={<i>4</i>}
 *   iconRight={Lucide.CircleHelp}
 * />
 * ```
 * This example shows the `item` variant of the Button component with both left
 * and right titles and icons. This is suitable for use as a link in a
 * navigational list, such as a side bar.
 */
export const Button = forwardRef(
  (
    {
      icon: Icon,
      title: titleComponentOrNode,
      titleRight: titleRightComponentOrNode,
      iconRight: IconRight,
      onClick,
      variant = 'default',
      current,
      className,
      href,
      alt,
    }: {
      /**
       * An optional component which renders an icon for the button, and which
       * must accept a className prop.
       */
      icon?: ComponentType<{className?: string}>;
      /**
       * An optional component, element, or string which renders the title of
       * the button.
       */
      title?: ComponentType | ReactNode;
      /**
       * An optional component, element, or string which renders a second title
       * on the right side of the button.
       */
      titleRight?: ComponentType | ReactNode;
      /**
       * An optional component which renders a second icon for the button, and
       * which must accept a className prop.
       */
      iconRight?: ComponentType<{className?: string}>;
      /**
       * A handler called when the user clicks on the button.
       */
      onClick?: () => void;
      /**
       * A common variant of the button, one of:
       * - default
       * - icon
       * - accent
       * - ghost
       * - item
       */
      variant?: keyof typeof buttonVariant;
      /**
       * An extra CSS class name for the component.
       */
      current?: boolean;
      /**
       * An extra CSS class name for the component.
       */
      className?: string;
      href?: string;
      /**
       * Alternative text shown when the user hovers over the component.
       */
      alt?: string;
    },
    ref: Ref<HTMLButtonElement>,
  ) => {
    const hrefClick = useCallback(
      () => (href ? open(href, '_blank', 'noreferrer') : null),
      [href],
    );

    return (
      <button
        className={classNames(
          button,
          buttonVariant[variant],
          current && highlight,
          className,
        )}
        onClick={onClick ?? hrefClick}
        title={alt}
        ref={ref}
      >
        {Icon ? <Icon className={iconSize} /> : null}
        {titleComponentOrNode ? (
          <span className={titleStyle}>
            {renderComponentOrNode(titleComponentOrNode)}
          </span>
        ) : null}
        {titleRightComponentOrNode ? (
          <span className={titleStyle}>
            {renderComponentOrNode(titleRightComponentOrNode)}
          </span>
        ) : null}
        {IconRight ? <IconRight className={iconSize} /> : null}
      </button>
    );
  },
);
