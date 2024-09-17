import {style} from '@vanilla-extract/css';
import {colors} from '../common/colors.css';
import {dimensions} from '../common/dimensions.css';

export const card = style([
  {
    padding: dimensions.padding,
    borderRadius: dimensions.radius,
    boxShadow: colors.shadow,
    border: colors.border,
    height: 'fit-content',
  },
]);
