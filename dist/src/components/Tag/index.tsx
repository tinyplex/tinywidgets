import type {ComponentType, ReactNode} from 'react';
import React from 'react';
import {classNames, renderComponentOrNode} from '../../common/functions';
import {tag, tagIcon, tagVariants} from './index.css';

/**
 * The `Tag` component displays a small rectangular tag, suitable for minimal
 * amounts of metadata, such as a notification count.
 *
 * @param props The props for the component.
 * @returns The Tag component.
 * @example
 * ```tsx
 * <Tag
 *   title="TinyWidgets"
 * />
 * ```
 * This example shows the `default` variant of the Tag component.
 * @example
 * ```tsx
 * <Tag
 *   title="57"
 *   variant="accent"
 *   icon={Lucide.Bell}
 *   alt="You have lots of notifications"
 * />
 * ```
 * This example shows the `accent` variant of the Tag component with an icon.
 * @icon Lucide.RectangleEllipsis
 */
export const Tag = ({
  icon: Icon,
  title,
  variant = 'default',
  alt,
  className,
}: {
  /**
   * An optional component which renders an icon for the tag, and which
   * must accept a className prop.
   */
  icon?: ComponentType<{className?: string}>;
  /**
   * An optional component, element, or string which renders the title of
   * the tag.
   */
  title?: ComponentType | ReactNode;
  /**
   * A variant of the tag, one of:
   * - `default`
   * - `accent`
   */
  variant?: keyof typeof tagVariants;
  /**
   * Alternative text shown when the user hovers over the component.
   */
  alt?: string;
  /**
   * An extra CSS class name for the component.
   */
  className?: string;
}) => {
  const icon = Icon ? <Icon className={tagIcon} /> : null;
  return (
    <div
      className={classNames(tag, tagVariants[variant], className)}
      title={alt}
    >
      {icon}
      {renderComponentOrNode(title)}
    </div>
  );
};
