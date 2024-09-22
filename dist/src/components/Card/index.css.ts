import {style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const card = style({
  padding: dimensions.padding,
  borderRadius: dimensions.radius,
  boxShadow: colors.shadow,
  border: colors.border,
  height: 'fit-content',
});
