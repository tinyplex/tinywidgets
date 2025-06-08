import {style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const select = style({
  borderRadius: dimensions.radius,
  padding: '0.5rem',
  outlineOffset: '2px',
  color: 'inherit',
  fontWeight: 'inherit',
  fontFamily: 'inherit',
  boxShadow: colors.shadow,
  border: colors.border,
  backgroundColor: colors.background,
});
