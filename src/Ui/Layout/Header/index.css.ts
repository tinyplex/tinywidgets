import {style} from '@vanilla-extract/css';
import {
  background,
  displayFlexRow,
  justify,
  padding1,
} from '../../../atoms.css.ts';
import {dimensions} from '../index.css.ts';

export const header = style([
  displayFlexRow,
  background,
  justify,
  padding1,
  {
    gap: '1rem',
    height: dimensions.topNavHeight,
  },
]);
