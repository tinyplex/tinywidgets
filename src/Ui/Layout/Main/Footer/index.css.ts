import {style} from '@vanilla-extract/css';
import {
  background,
  displayFlexRow,
  justify,
  padding1,
} from '../../../../atoms.css.ts';

export const footer = style([displayFlexRow, justify, padding1, background]);
