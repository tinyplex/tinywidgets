import { style } from '@vanilla-extract/css';
import { background, displayFlexRow } from '../../../index.css.ts';
import { large } from '../../../index.ts';
import { dimensions } from '../../Layout/index.css.ts';

export const header = style([
  displayFlexRow,
  background,
  {
    ...large({
      width: dimensions.sideBarWidth,
      flexDirection: 'column',
    }),
  },
]);
