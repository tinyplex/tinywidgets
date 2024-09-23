import React, {ComponentType, ReactNode} from 'react';
import type {StyleRule} from '@vanilla-extract/css';

export const LARGE_BREAK = 768;
export const SMALL_BREAK = 448;

/**
 * The classNames function returns a concatenated list of class names, filtering
 * out any `null` or `undefined` values.
 *
 * This allows you to easily toggle classes based on conditions.
 *
 * @returns A string of space-separated class names.
 * @example
 * ```tsx
 * const classes = classNames(
 *   'class1',
 *   false && 'class2',
 *   true && 'class3',
 * );
 * // ...
 * <div className={classes}>
 *   <code>{classes}</code>
 * </div>
 * ```
 * This example shows the function returning a class name list.
 */
export const classNames = (
  ...classes: (string | boolean | null | undefined)[]
) => classes.filter(Boolean).join(' ');

export const renderComponentOrNode = (
  ComponentOrNode: ComponentType | ReactNode,
  fallback: ReactNode = null,
) =>
  ComponentOrNode instanceof Function ? (
    <ComponentOrNode />
  ) : (
    (ComponentOrNode ?? fallback)
  );

export const large = (style: StyleRule) => ({
  '@media': {[`screen and (min-width: ${LARGE_BREAK}px)`]: style},
});

export const notLarge = (style: StyleRule) => ({
  '@media': {[`screen and (max-width: ${LARGE_BREAK}px)`]: style},
});

export const small = (style: StyleRule) => ({
  '@media': {[`screen and (min-width: ${SMALL_BREAK}px)`]: style},
});

export const notSmall = (style: StyleRule) => ({
  '@media': {[`screen and (max-width: ${SMALL_BREAK}px)`]: style},
});
