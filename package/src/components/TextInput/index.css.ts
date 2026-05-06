import {style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const wrapper = style({
  alignSelf: 'stretch',
  flexShrink: 0,
  position: 'relative',
  display: 'block',
});

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
  lineHeight: '1.5rem',
  width: '100%',
});

export const inputWithIcon = style({
  textIndent: `calc(${dimensions.icon} * 1.3)`,
});

export const icon = style({
  position: 'absolute',
  left: `calc(${dimensions.icon} * .5)`,
  top: `calc(${dimensions.icon} * .8)`,
  color: colors.foregroundDim,
  backgroundColor: colors.background,
  borderRight: `calc(${dimensions.icon} * .25) solid ${colors.background}`,
  boxSizing: 'content-box',
});
