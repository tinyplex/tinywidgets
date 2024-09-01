import {style} from '@vanilla-extract/css';
import {dimensions, row, theme} from '../../../../index.css.ts';

export const footer = style([
  row,
  {
    padding: dimensions.padding,
    background: theme.background,
    height: dimensions.footerHeight,
    borderTop: `1px solid ${theme.border}`,
  },
]);
