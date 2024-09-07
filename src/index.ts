import React from 'react';
import type {StyleRule} from '@vanilla-extract/css';

const LARGE = 'screen and (min-width: 768px)';
const SMALL = 'screen and (max-width: 450px)';

export const {
  createElement,
  Fragment,
  useEffect,
  useRef,
  useState,
  useCallback,
  forwardRef,
} = React;

export const large = (style: StyleRule) => ({
  '@media': {[LARGE]: style},
});

export const small = (style: StyleRule) => ({
  '@media': {[SMALL]: style},
});

export const classNames = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(' ');
