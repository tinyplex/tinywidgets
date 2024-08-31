import { style } from '@vanilla-extract/css';
import {
  background,
  displayFlexColumn,
  displayFlexRow,
  justify,
  padding1,
} from '../../../index.css.ts';
import { large } from '../../../index.ts';
import { dimensions } from '../../Layout/index.css.ts';

export const main = style([
  displayFlexColumn,
  background,
  {
    flex: 1,
    overflow: 'scroll',
    ...large({paddingTop: dimensions.topBarHeight}),
  },
]);

export const article = style([
  padding1,
  background,
  {
    flex: 1,
    width: '100%',
    maxWidth: '80rem',
    margin: '0 auto',
    backgroundColor: 'red',
  },
]);

export const footer = style([displayFlexRow, justify, padding1, background]);
