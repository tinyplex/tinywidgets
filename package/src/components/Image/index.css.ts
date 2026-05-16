import {style, styleVariants} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const image = style({
  display: 'inline-block',
  flexShrink: 0,
  maxHeight: 'inherit',
  width: '100%',
});

export const clickable = style({
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: colors.backgroundHover,
    },
  },
});

export const imageVariants = styleVariants({
  avatar: {
    border: colors.border,
    borderRadius: '50%',
    boxShadow: colors.shadow,
    height: dimensions.avatar,
    width: dimensions.avatar,
  },
  default: {
    borderRadius: dimensions.radius,
    boxShadow: colors.shadow,
  },
  icon: {
    border: colors.border,
    height: dimensions.icon,
    width: dimensions.icon,
  },
  logo: {
    height: dimensions.logo,
    width: dimensions.logo,
  },
});
