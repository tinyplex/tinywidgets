import {style, styleVariants} from '@vanilla-extract/css';
import {colors} from '../../common/colors.css';
import {dimensions} from '../../common/dimensions.css';

export const image = style({
  display: 'inline-block',
  boxShadow: colors.shadow,
  border: colors.border,
  flexShrink: 0,
  selectors: {
    '&:hover': {
      backgroundColor: colors.backgroundHover,
    },
  },
});

export const imageVariants = styleVariants({
  default: {
    borderRadius: dimensions.radius,
  },
  logo: {
    width: dimensions.logo,
    height: dimensions.logo,
  },
  avatar: {
    borderRadius: '50%',
    width: dimensions.avatar,
    height: dimensions.avatar,
  },
  icon: {
    width: dimensions.icon,
    height: dimensions.icon,
  },
});
