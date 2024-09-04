import {style, styleVariants} from '@vanilla-extract/css';
import {theme} from '../index.css';

export const tag = style({
  fontSize: '0.625rem',
  lineHeight: '0.625rem',
  padding: '0.1rem 0.25rem',
  borderRadius: '0.25rem',
  gap: '0.25rem',
  flexShrink: 0,
});

export const tagVariant = styleVariants({
  default: {
    backgroundColor: theme.backgroundHover,
    color: theme.foreground2,
  },
  accent: {
    backgroundColor: theme.accent,
    color: theme.accentContrast,
  },
});

export const tagIcon = style({
  width: '0.7rem',
  height: '0.7rem',
});
