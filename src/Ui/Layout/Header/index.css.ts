import {style} from '@vanilla-extract/css';
import {
  background,
  displayFlexRow,
  justify,
  padding1,
  shadow,
} from '../../../atoms.css.ts';
import {dimensions, theme} from '../../../index.css';

export const header = style([
  displayFlexRow,
  background,
  justify,
  padding1,
  shadow,
  {
    gap: '1rem',
    height: dimensions.topNavHeight,
    borderBottom: `1px solid ${theme.border}`,
    zIndex: 1,
  },
]);
