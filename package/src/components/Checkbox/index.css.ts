import {globalStyle, style, styleVariants} from '@vanilla-extract/css';
import {dimensions} from '../../css/dimensions.css';
import {colors} from '../../index.css';

export const checkbox = style({
  alignItems: 'center',
  border: colors.border,
  borderRadius: dimensions.radius,
  boxSizing: 'border-box',
  boxShadow: colors.shadow + ' inset',
  display: 'inline-flex',
  justifyContent: 'center',
});

export const checkboxVariants = styleVariants({
  default: {
    height: '2.5rem',
    margin: 0,
    padding: '0.5rem',
    width: '2.5rem',
  },
  small: {
    height: '1.5rem',
    margin: 0,
    padding: '0.25rem',
    width: '1.5rem',
  },
});

globalStyle(`${checkboxVariants.small} svg`, {
  height: '0.85rem',
  width: '0.85rem',
});
