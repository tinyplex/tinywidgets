import {style, styleVariants} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const select = style({
  backgroundColor: colors.background,
  border: colors.border,
  borderRadius: dimensions.radius,
  boxSizing: 'border-box',
  boxShadow: colors.shadow,
  color: 'inherit',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  outlineOffset: '2px',
});

export const selectVariants = styleVariants({
  default: {
    height: '2.5rem',
    padding: '0.5rem',
  },
  small: {
    fontSize: '0.75rem',
    height: '1.5rem',
    lineHeight: '0.875rem',
    padding: '0.1875rem 0.375rem',
  },
});
