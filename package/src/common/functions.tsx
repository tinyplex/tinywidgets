import type {StyleRule} from '@vanilla-extract/css';
import {createElement, type ComponentType, type ReactNode} from 'react';
import {screens} from '../css/screens';

/**
 * The `classNames` function returns a concatenated list of class names,
 * filtering out any `null` or `undefined` values.
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
 * <Card className={classes}>
 *   <code>{classes}</code>
 * </Card>
 * ```
 * This example shows the function returning a class name list.
 */
export const classNames = (
  ...classes: (string | boolean | null | undefined)[]
) => classes.filter(Boolean).join(' ');

export const renderComponentOrNode = (
  ComponentOrNode: ComponentType | ReactNode,
  fallback: ReactNode = null,
): ReactNode => {
  if (ComponentOrNode == null) {
    return fallback;
  }
  return typeof ComponentOrNode == 'function'
    ? createElement(ComponentOrNode as ComponentType)
    : ComponentOrNode;
};

export const large = (style: StyleRule) => ({
  '@media': {[`screen and (min-width: ${screens.large}px)`]: style},
});

export const notLarge = (style: StyleRule) => ({
  '@media': {[`screen and (max-width: ${screens.large}px)`]: style},
});

export const small = (style: StyleRule) => ({
  '@media': {[`screen and (max-width: ${screens.small}px)`]: style},
});

export const notSmall = (style: StyleRule) => ({
  '@media': {[`screen and (min-width: ${screens.small}px)`]: style},
});
