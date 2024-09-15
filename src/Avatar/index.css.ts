import {style} from '@vanilla-extract/css';
import {colors} from '../common/colors.css';

export const avatar = style({
  display: 'inline-block',
  width: '2rem',
  height: '2rem',
  boxShadow: colors.shadow,
  borderRadius: '50%',
  border: `1px solid ${colors.border}`,
  flexShrink: 0,
  selectors: {
    '&:hover': {
      backgroundColor: colors.backgroundHover,
    },
  },
});
