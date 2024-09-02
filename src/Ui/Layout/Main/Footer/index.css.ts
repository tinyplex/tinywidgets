import {style} from '@vanilla-extract/css';
import {axisLike, dimensions, paddingLike, theme} from '../../../../index.css';

export const footer = style([
  {
    ...axisLike,
    ...paddingLike,
    background: theme.background,
    height: dimensions.footerHeight,
    borderTop: `1px solid ${theme.border}`,
  },
]);
