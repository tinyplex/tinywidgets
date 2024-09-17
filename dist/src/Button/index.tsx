import type {ComponentType, ReactNode, Ref} from 'react';
import React, {forwardRef, useCallback} from 'react';
import {iconSize} from '../common/dimensions.css.ts';
import {classNames} from '../common/utils.tsx';
import {button, buttonVariant, highlight, labelStyle} from './index.css.ts';

/**
 * The Button component displays an button, with a number of common variants.
 *
 * @param props The props for the component.
 * @returns The Button component.
 * @example
 * ```tsx
 * <Button
 *   label="TinyWidgets"
 *   onClick={() => alert('Clicked!')}
 * />
 * ```
 * This example shows the default variant of the Button component.
 */
export const Button = forwardRef(
  (
    {
      icon: Icon,
      label,
      labelRight,
      iconRight: IconRight,
      onClick,
      variant = 'default',
      className,
      href,
      title,
      current,
    }: {
      /**
       * A component which renders an icon for the button, and which must accept
       * a className prop.
       */
      icon?: ComponentType<{className?: string}>;
      label?: ReactNode;
      labelRight?: ReactNode;
      iconRight?: ComponentType<{className?: string}>;
      onClick?: () => void;
      variant?: keyof typeof buttonVariant;
      className?: string;
      href?: string;
      title?: string;
      current?: boolean;
    },
    ref: Ref<HTMLButtonElement>,
  ) => {
    const icon = Icon ? <Icon className={iconSize} /> : null;
    const iconRight = IconRight ? <IconRight className={iconSize} /> : null;

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
        title={title}
        ref={ref}
      >
        {icon}
        {label ? <span className={labelStyle}>{label}</span> : null}
        {labelRight}
        {iconRight}
      </button>
    );
  },
);
