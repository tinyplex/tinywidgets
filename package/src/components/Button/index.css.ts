import {createVar, style, styleVariants} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

const titleFlex = createVar();

export const button = style({
  alignItems: 'center',
  alignSelf: 'center',
  background: 'none',
  border: '1px solid transparent',
  borderRadius: dimensions.radius,
  color: 'inherit',
  cursor: 'pointer',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  gap: dimensions.padding,
  justifyContent: 'space-between',
  outlineOffset: '-2px',
  overflow: 'hidden',
  padding: '0.5rem 1rem',
  selectors: {
    '&:hover': {
      backgroundColor: colors.backgroundHover,
      color: colors.foregroundBright,
    },
  },
  textAlign: 'left',
  transition: 'background-color 0.1s,border-color 0.1s',
  vars: {[titleFlex]: '1 1 auto'},
  whiteSpace: 'nowrap',
});

export const buttonVariants = styleVariants({
  accent: {
    backgroundColor: colors.accent,
    border: colors.border,
    boxShadow: colors.shadow,
    color: colors.accentContrast,
    selectors: {
      '&:hover': {
        backgroundColor: colors.accentHover,
      },
    },
  },
  default: {
    backgroundColor: colors.background,
    border: colors.border,
    boxShadow: colors.shadow,
  },
  ghost: {},
  icon: {padding: '0.25rem'},
  item: {width: '100%'},
  toolbar: {
    alignItems: 'center',
    backgroundColor: colors.background,
    border: colors.border,
    boxShadow: colors.shadow,
    flexDirection: 'column',
    gap: '0.25rem',
    justifyContent: 'center',
    textAlign: 'center',
    vars: {[titleFlex]: '0 1 auto'},
  },
});

export const currentStyle = style({
  backgroundColor: colors.backgroundHover,
  color: colors.foregroundBright,
});

export const titleStyle = style({
  flex: titleFlex,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const titleStyleRight = style({
  flex: '0 0 auto',
  overflow: 'hidden',
});
