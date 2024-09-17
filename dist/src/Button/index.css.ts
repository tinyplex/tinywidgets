import {style, styleVariants} from '@vanilla-extract/css';
import {colors} from '../common/colors.css';
import {dimensions} from '../common/dimensions.css';

export const button = style({
  display: 'flex',
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
  transition: 'background-color 0.2s,border-color 0.2s',
  flexShrink: 0,
  selectors: {
    '&:hover': {
      backgroundColor: colors.backgroundHover,
    },
  },
});

export const buttonVariant = styleVariants({
  default: {
    boxShadow: colors.shadow,
    border: colors.border,
    backgroundColor: colors.background,
  },
  accent: {
    boxShadow: colors.shadow,
    backgroundColor: colors.accent,
    color: colors.accentContrast,
    border: 0,
    selectors: {
      '&:hover': {
        backgroundColor: colors.accentHover,
      },
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    border: 0,
  },
  item: {backgroundColor: 'transparent', border: 0, width: '100%'},
  icon: {backgroundColor: 'transparent', border: 0, padding: '0.25rem'},
});

export const highlight = style({
  backgroundColor: colors.backgroundHover,
});

export const labelStyle = style({
  flex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
