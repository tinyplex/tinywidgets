import {style, styleVariants} from '@vanilla-extract/css';
import {colors} from '../common/colors.css';

export const tag = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.625rem',
  lineHeight: '0.625rem',
  padding: '0.1rem 0.25rem',
  borderRadius: '0.25rem',
  gap: '0.25rem',
  flexShrink: 0,
});

export const tagVariant = styleVariants({
  default: {
    backgroundColor: colors.backgroundHover,
    color: colors.foreground2,
  },
  accent: {
    backgroundColor: colors.accent,
    color: colors.accentContrast,
  },
});

export const tagIcon = style({
  width: '0.7rem',
  height: '0.7rem',
});
