import { style } from '@vanilla-extract/css';
import {
  background,
  displayFlexRow,
  justify,
  padding1,
} from '../../../index.css';

export const footer = style([displayFlexRow, justify, padding1, background]);
