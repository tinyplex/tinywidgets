import {style, styleVariants} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';

export const tag = style({
  borderRadius: '0.25rem',
  flexShrink: 0,
  fontSize: '0.625rem',
  gap: '0.25rem',
  lineHeight: '0.625rem',
  padding: '0.1rem 0.25rem',
});

export const tagVariants = styleVariants({
  accent: {
    backgroundColor: colors.accent,
    color: colors.accentContrast,
  },
  default: {
    backgroundColor: colors.backgroundHover,
    color: colors.foregroundDim,
  },
});

export const tagIcon = style({
  height: '0.7rem',
  width: '0.7rem',
});
