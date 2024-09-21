import {colors, dimensions} from 'tinywidgets/css';
import {globalStyle, style} from '@vanilla-extract/css';

globalStyle('pre', {
  background: colors.background2,
  border: colors.border,
  borderRadius: dimensions.radius,
});

export const titleStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});
