import {style, styleVariants} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const image = style({
  display: 'inline-block',
  flexShrink: 0,
  width: '100%',
  maxHeight: 'inherit',
  selectors: {
    '&:hover': {
      backgroundColor: colors.backgroundHover,
    },
  },
});

export const imageVariants = styleVariants({
  default: {
    borderRadius: dimensions.radius,
    boxShadow: colors.shadow,
  },
  logo: {
    width: dimensions.logo,
    height: dimensions.logo,
  },
  avatar: {
    borderRadius: '50%',
    border: colors.border,
    width: dimensions.avatar,
    height: dimensions.avatar,
    boxShadow: colors.shadow,
  },
  icon: {
    border: colors.border,
    width: dimensions.icon,
    height: dimensions.icon,
  },
});
