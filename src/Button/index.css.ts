import {style, styleVariants} from '@vanilla-extract/css';
import {axisLike, borderLike, radiusLike, theme} from '../index.css';

const ghostLike = {
  backgroundColor: 'transparent',
  border: 0,
};

export const button = style([
  axisLike,
  radiusLike,
  {
    textAlign: 'left',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    outlineOffset: '-2px',
    backgroundColor: theme.background,
    color: 'inherit',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.2s,border-color 0.2s',
    selectors: {
      '&:hover': {
        backgroundColor: theme.backgroundHover,
      },
    },
  },
]);

export const buttonVariant = styleVariants({
  default: borderLike,
  accent: {
    ...borderLike,
    backgroundColor: theme.accent,
    color: theme.accentContrast,
    border: 0,
    selectors: {
      '&:hover': {
        backgroundColor: theme.accentHover,
      },
    },
  },
  ghost: ghostLike,
  item: {...ghostLike, width: '100%'},
  icon: {...ghostLike, padding: '0.25rem'},
});

export const highlight = style({
  backgroundColor: theme.backgroundHover,
});

export const labelStyle = style({
  flex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
