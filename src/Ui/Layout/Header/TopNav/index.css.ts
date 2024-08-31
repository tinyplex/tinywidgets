import { style } from '@vanilla-extract/css';
import { displayFlexRow, justify, padding1 } from '../../../../index.css.ts';
import { large } from '../../../../index.ts';

export const topNav = style([
  displayFlexRow,
  justify,
  padding1,
  {
    flex: 1,
    background: 'green',
    ...large({}),
  },
]);
