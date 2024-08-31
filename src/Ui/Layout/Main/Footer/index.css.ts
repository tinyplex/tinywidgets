import {style} from '@vanilla-extract/css';
import {dimensions, theme} from '../../../../index.css.ts';

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: dimensions.padding,
  background: theme.background,
  borderTop: `1px solid ${theme.border}`,
  height: dimensions.footerHeight,
});
