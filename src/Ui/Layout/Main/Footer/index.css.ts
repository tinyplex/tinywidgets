import {style} from '@vanilla-extract/css';
import {dimensions, rowLike, theme} from '../../../../index.css';

export const footer = style([
  {
    ...rowLike,
    padding: dimensions.padding,
    background: theme.background,
    height: dimensions.footerHeight,
    borderTop: `1px solid ${theme.border}`,
  },
]);
