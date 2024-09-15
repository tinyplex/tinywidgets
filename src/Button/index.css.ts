import {style, styleVariants} from '@vanilla-extract/css';
import {borderLike, colors} from '../common/colors.css';
import {axisLike, radiusLike} from '../common/dimensions.css';

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
    backgroundColor: colors.background,
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
  },
]);

export const buttonVariant = styleVariants({
  default: borderLike,
  accent: {
    ...borderLike,
    backgroundColor: colors.accent,
    color: colors.accentContrast,
    border: 0,
    selectors: {
      '&:hover': {
        backgroundColor: colors.accentHover,
      },
    },
  },
  ghost: ghostLike,
  item: {...ghostLike, width: '100%'},
  icon: {...ghostLike, padding: '0.25rem'},
});

export const highlight = style({
  backgroundColor: colors.backgroundHover,
});

export const labelStyle = style({
  flex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
