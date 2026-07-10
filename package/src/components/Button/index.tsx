import type {ComponentType, ReactNode} from 'react';
import {useCallback} from 'react';
import {classNames, renderComponentOrNode} from '../../common/functions.tsx';
import {iconSize} from '../../css/dimensions.css.ts';
import {
  button,
  buttonVariants,
  currentStyle,
  titleStyle,
  titleStyleRight,
} from './index.css.ts';

/**
 * The `Button` component displays a button, with a number of common variants.
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
 *   disabled={true}
 * />
 * ```
 * This example shows the `default` variant of the Button component when it is
 * disabled.
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
 *   variant="icon"
 * />
 * ```
 * This example shows the `icon` variant of the Button component, which renders
 * no border, text, or background.
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
 *   title="tinybase.org"
 *   iconRight={Lucide.SquareArrowOutUpRight}
 *   variant="accent"
 *   href="https://tinybase.org"
 * />
 * ```
 * This example shows the `accent` variant of the Button component with an icon,
 * and that launches a new link.
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
 * @example
 * ```tsx
 * <Button
 *   variant="item"
 *   icon={Lucide.Grid3x3}
 *   title="TinyWidgets"
 *   current={true}
 * />
 * ```
 * This example shows the `item` variant of the Button component, marked as
 * 'current'.
 * @example
 * ```tsx
 * <Button
 *   variant="toolbar"
 *   icon={Lucide.Grid3x3}
 *   title="New Grid"
 * />
 * ```
 * This example shows the `toolbar` variant of the Button component, with the
 * icon stacked above the title.
 * @example
 * ```tsx
 * <Button
 *   alt="New Grid"
 *   icon={Lucide.Grid3x3}
 *   variant="toolbarIcon"
 * />
 * ```
 * This example shows the `toolbarIcon` variant of the Button component, which
 * is suitable for use in an icon-only toolbar.
 * @icon Lucide.RectangleHorizontal
 */
export const Button = ({
  icon: Icon,
  title: titleComponentOrNode,
  titleRight: titleRightComponentOrNode,
  iconRight: IconRight,
  onClick,
  variant = 'default',
  current,
  disabled,
  href,
  alt,
  className,
  anchorName,
  ref,
}: {
  /**
   * An optional component which renders an icon for the button, and which
   * must accept a className prop.
   */
  readonly icon?: ComponentType<{className?: string}>;
  /**
   * An optional component, element, or string which renders the title of
   * the button.
   */
  readonly title?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders a second title
   * on the right side of the button.
   */
  readonly titleRight?: ComponentType | ReactNode;
  /**
   * An optional component which renders a second icon for the button, and
   * which must accept a className prop.
   */
  readonly iconRight?: ComponentType<{className?: string}>;
  /**
   * A handler called when the user clicks on the button.
   */
  readonly onClick?: () => void;
  /**
   * A variant of the button, one of:
   * - `default`
   * - `icon`
   * - `accent`
   * - `ghost`
   * - `item`
   * - `toolbar`
   * - `toolbarIcon`
   */
  readonly variant?: keyof typeof buttonVariants;
  /**
   * A flag that indicates that an `item` button is 'current' and therefore
   * highlighted.
   */
  readonly current?: boolean;
  /**
   * A flag that indicates that the button is disabled.
   */
  readonly disabled?: boolean;
  /**
   * A URL that can be used instead of an `onClick` to launch a new web
   * page, much like a link.
   */
  readonly href?: string;
  /**
   * Alternative text shown when the user hovers over the button.
   */
  readonly alt?: string;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
  /**
   * An name for the component to be used as an anchor for other elements.
   */
  readonly anchorName?: string;
  /**
   * A ref to the underlying button element.
   */
  ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const hrefClick = useCallback(
    () => (href ? open(href, '_blank', 'noreferrer') : null),
    [href],
  );
  const iconOnly = variant === 'icon' || variant === 'toolbarIcon';

  return (
    <button
      className={classNames(
        button,
        buttonVariants[variant],
        current && currentStyle,
        className,
      )}
      disabled={disabled}
      onClick={disabled ? undefined : (onClick ?? hrefClick)}
      title={alt}
      ref={ref}
      {...(anchorName ? {style: {anchorName}} : {})}
    >
      {Icon ? <Icon className={iconSize} /> : null}
      {!iconOnly && titleComponentOrNode ? (
        <span className={titleStyle}>
          {renderComponentOrNode(titleComponentOrNode)}
        </span>
      ) : null}
      {!iconOnly && titleRightComponentOrNode ? (
        <span className={titleStyleRight}>
          {renderComponentOrNode(titleRightComponentOrNode)}
        </span>
      ) : null}
      {!iconOnly && IconRight ? <IconRight className={iconSize} /> : null}
    </button>
  );
};
