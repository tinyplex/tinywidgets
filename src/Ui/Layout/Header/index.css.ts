import {style} from '@vanilla-extract/css';
import {
  background,
  displayFlexRow,
  justify,
  padding1,
} from '../../../atoms.css.ts';
import {dimensions, theme} from '../../../index.css';

export const header = style([
  displayFlexRow,
  background,
  justify,
  padding1,
  {
    gap: '1rem',
    height: dimensions.topNavHeight,
    borderBottom: `1px solid ${theme.border}`,
  },
]);
