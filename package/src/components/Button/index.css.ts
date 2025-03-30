import {style, styleVariants} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const button = style({
  display: 'inline-flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: dimensions.padding,
  borderRadius: dimensions.radius,
  textAlign: 'left',
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  outlineOffset: '-2px',
  color: 'inherit',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.1s,border-color 0.1s',
  flexShrink: 0,
  border: 0,
  alignSelf: 'center',
  background: 'none',
  selectors: {
    '&:hover': {
      backgroundColor: colors.backgroundHover,
      color: colors.foregroundBright,
    },
  },
});

export const buttonVariants = styleVariants({
  default: {
    boxShadow: colors.shadow,
    border: colors.border,
    backgroundColor: colors.background,
  },
  accent: {
    boxShadow: colors.shadow,
    backgroundColor: colors.accent,
    color: colors.accentContrast,
    selectors: {
      '&:hover': {
        backgroundColor: colors.accentHover,
      },
    },
  },
  ghost: {},
  item: {width: '100%'},
  icon: {padding: '0.25rem'},
});

export const currentStyle = style({
  backgroundColor: colors.backgroundHover,
  color: colors.foregroundBright,
});

export const titleStyle = style({
  flex: '1 1 auto',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const titleStyleRight = style({
  flex: '0 0 auto',
  overflow: 'hidden',
});
