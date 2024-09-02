import {style, styleVariants} from '@vanilla-extract/css';
import {theme} from '../index.css';

export const tag = style({
  fontSize: '0.625rem',
  lineHeight: '0.625rem',
  padding: '0.1rem 0.25rem',
  borderRadius: '0.25rem',
  gap: '0.1rem',
  flexShrink: 0,
});

export const tagVariant = styleVariants({
  default: {
    backgroundColor: theme.foreground2,
    color: theme.background,
  },
  accent: {
    backgroundColor: theme.accent,
    color: theme.accentContrast,
  },
});
