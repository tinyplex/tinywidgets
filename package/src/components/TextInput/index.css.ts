import {style, styleVariants} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const wrapper = style({
  alignSelf: 'stretch',
  display: 'block',
  flex: '1 1 auto',
  minWidth: 0,
  position: 'relative',
});

export const input = style({
  backgroundColor: colors.background,
  border: colors.border,
  borderRadius: dimensions.radius,
  boxSizing: 'border-box',
  boxShadow: colors.shadow + ' inset',
  color: 'inherit',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  outlineOffset: '2px',
  width: '100%',
});

export const inputVariants = styleVariants({
  default: {
    height: '2.5rem',
    lineHeight: '1.5rem',
    padding: '0.5rem',
  },
  small: {
    fontSize: '0.75rem',
    height: '1.5rem',
    lineHeight: '0.875rem',
    padding: '0.1875rem 0.375rem',
  },
});

export const inputWithIconVariants = styleVariants({
  default: {
    textIndent: `calc(${dimensions.icon} * 1.3)`,
  },
  small: {
    textIndent: '1rem',
  },
});

export const icon = style({
  backgroundColor: colors.background,
  borderRight: `calc(${dimensions.icon} * .25) solid ${colors.background}`,
  boxSizing: 'content-box',
  color: colors.foregroundDim,
  left: `calc(${dimensions.icon} * .5)`,
  position: 'absolute',
  top: `calc(${dimensions.icon} * .8)`,
});

export const iconVariants = styleVariants({
  default: {},
  small: {
    borderRight: `calc(${dimensions.icon} * .2) solid ${colors.background}`,
    height: '0.75rem',
    left: '0.375rem',
    top: '0.4375rem',
    width: '0.75rem',
  },
});
