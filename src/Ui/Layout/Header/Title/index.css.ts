import { style } from '@vanilla-extract/css';
import { displayFlexRow, justify, padding1 } from '../../../../index.css.ts';
import { dimensions } from '../../../Layout/index.css.ts';

export const title = style([
  displayFlexRow,
  justify,
  padding1,
  {
    height: dimensions.topBarHeight,
    flex: '0 0 auto',
  },
]);
