import { style } from '@vanilla-extract/css';
import { background, displayFlexRow } from '../../../index.css.ts';
import { large } from '../../../index.ts';
import { dimensions } from '../index.css.ts';

export const header = style([
  displayFlexRow,
  background,
  {
    height: dimensions.topBarHeight,
    background: 'rgba(255,0,0,0.5)',
    ...large({}),
  },
]);
