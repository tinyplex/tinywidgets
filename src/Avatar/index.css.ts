import {style, styleVariants} from '@vanilla-extract/css';
import {square2, theme} from '../index.css';

const avatarBase = style([
  {
    ...square2,
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
