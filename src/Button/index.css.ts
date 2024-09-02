import {style, styleVariants} from '@vanilla-extract/css';
import {borderLike, buttonLike, radiusLike, rowLike, theme} from '../index.css';

const ghostLike = {
  backgroundColor: 'transparent',
  color: theme.foreground,
  border: 0,
};

const buttonBase = style([
  buttonLike,
  rowLike,
  radiusLike,
  {
    transition: 'background-color 0.2s,border-color 0.2s',
    selectors: {
      '&:hover': {
        backgroundColor: theme.backgroundHover,
      },
    },
  },
]);

export const button = styleVariants({
  default: [buttonBase, borderLike],
  accent: [
    buttonBase,
    borderLike,
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
  ghost: [buttonBase, ghostLike],
  icon: [buttonBase, ghostLike, {padding: '0.25rem'}],
});
