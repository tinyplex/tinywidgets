import React, {ComponentType, ReactNode} from 'react';
import type {StyleRule} from '@vanilla-extract/css';

const LARGE = 'screen and (min-width: 768px)';
const SMALL = 'screen and (max-width: 450px)';

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
  '@media': {[LARGE]: style},
});

export const small = (style: StyleRule) => ({
  '@media': {[SMALL]: style},
});

export const classNames = (
  ...classes: (string | boolean | null | undefined)[]
) => classes.filter(Boolean).join(' ');
