import {style} from '@vanilla-extract/css';
import {displayFlexRow, justify} from '../../../../index.css.ts';
import {large} from '../../../../index.ts';

export const topNav = style([
  displayFlexRow,
  justify,
  {
    flex: 1,
    background: 'green',
    ...large({}),
  },
]);
