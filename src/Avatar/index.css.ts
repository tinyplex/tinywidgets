import {style} from '@vanilla-extract/css';
import {theme} from '../index.css';

export const avatar = style({
  display: 'inline-block',
  width: '2rem',
  height: '2rem',
  boxShadow: theme.shadow,
  borderRadius: '50%',
  border: `1px solid ${theme.border}`,
  flexShrink: 0,
  selectors: {
    '&:hover': {
      backgroundColor: theme.backgroundHover,
    },
  },
});
