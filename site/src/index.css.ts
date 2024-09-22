import {colors, dimensions} from 'tinywidgets/css';
import {globalStyle, style} from '@vanilla-extract/css';

globalStyle('pre', {
  background: colors.background2,
  border: colors.border,
  borderRadius: dimensions.radius,
});

export const titleStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: colors.foregroundBright,
});
