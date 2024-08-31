import {style, styleVariants} from '@vanilla-extract/css';
import {dimensions, theme} from '../index.css';

const buttonBase = style([
  {
    boxShadow: theme.shadow,
    borderRadius: dimensions.radius,
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${theme.border}`,
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    lineHeight: '1rem',
    backgroundColor: theme.background,
    color: theme.foreground,
    transition: 'background-color 0.2s,border-color 0.2s',
    selectors: {
      '&:hover': {
        backgroundColor: theme.backgroundHover,
      },
    },
  },
]);

export const button = styleVariants({
  default: [buttonBase],
  accent: [
    buttonBase,
    {
      backgroundColor: theme.accent,
      color: theme.accentContrast,
      border: 0,
      selectors: {
        '&:hover': {
          backgroundColor: theme.accentHover,
        },
      },
    },
  ],
});
