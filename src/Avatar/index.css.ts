import {style, styleVariants} from '@vanilla-extract/css';
import {theme} from '../index.css';

const avatarBase = style([
  {
    display: 'inline-block',
    width: '2rem',
    height: '2rem',
    boxShadow: theme.shadow,
    borderRadius: '50%',
    border: `1px solid ${theme.border}`,
    cursor: 'pointer',
    selectors: {
      '&:hover': {
        backgroundColor: theme.backgroundHover,
      },
    },
  },
]);

export const avatar = styleVariants({
  default: [avatarBase],
});
