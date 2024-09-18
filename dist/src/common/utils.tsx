import React, {ComponentType, ReactNode} from 'react';
import type {StyleRule} from '@vanilla-extract/css';

const LARGE = 768;
const SMALL = 450;

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
  '@media': {[`screen and (min-width: ${LARGE}px)`]: style},
});

export const notLarge = (style: StyleRule) => ({
  '@media': {[`screen and (max-width: ${LARGE}px)`]: style},
});

export const small = (style: StyleRule) => ({
  '@media': {[`screen and (min-width: ${SMALL}px)`]: style},
});

export const notSmall = (style: StyleRule) => ({
  '@media': {[`screen and (max-width: ${SMALL}px)`]: style},
});

export const classNames = (
  ...classes: (string | boolean | null | undefined)[]
) => classes.filter(Boolean).join(' ');
