import { style } from '@vanilla-extract/css';
import { displayFlexRow, justify, padding1 } from '../../../../index.css.ts';
import { large } from '../../../../index.ts';
import { dimensions } from '../../../Layout/index.css.ts';

export const topBar = style([
  displayFlexRow,
  justify,
  padding1,
  {
    flex: 1,
    left: dimensions.sideBarWidth,
    ...large({position: 'fixed', right: 0}),
  },
]);
