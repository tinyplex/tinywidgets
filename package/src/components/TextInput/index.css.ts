import {style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const wrapper = style({
  flexShrink: 0,
  alignSelf: 'center',
  position: 'relative',
});

export const wrapperWithIcon = style({});

export const input = style({
  borderRadius: dimensions.radius,
  padding: '0.5rem',
  outlineOffset: '2px',
  color: 'inherit',
  fontWeight: 'inherit',
  fontFamily: 'inherit',
  boxShadow: colors.shadow + ' inset',
  border: colors.border,
  backgroundColor: colors.background,
});

export const inputWithIcon = style({
  textIndent: `calc(${dimensions.icon} * 1.3)`,
});

export const icon = style({
  position: 'absolute',
  left: `calc(${dimensions.icon} * .5)`,
  top: `calc(${dimensions.icon} * .65)`,
  color: colors.foregroundDim,
  backgroundColor: colors.background,
  borderRight: `calc(${dimensions.icon} * .25) solid ${colors.background}`,
  boxSizing: 'content-box',
});
