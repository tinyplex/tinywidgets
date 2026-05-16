import {globalStyle, style, styleVariants} from '@vanilla-extract/css';
import {dimensions} from '../../css/dimensions.css';
import {colors} from '../../index.css';

export const checkbox = style({
  border: colors.border,
  borderRadius: dimensions.radius,
  boxShadow: colors.shadow + ' inset',
  display: 'inline-block',
});

export const checkboxVariants = styleVariants({
  default: {
    height: '2rem',
    margin: '5px',
    padding: '0.5rem',
    width: '2rem',
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
