import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';
import {style} from '@vanilla-extract/css';

export const card = style({
  padding: dimensions.padding,
  borderRadius: dimensions.radius,
  boxShadow: colors.shadow,
  border: colors.border,
  height: 'fit-content',
  overflow: 'auto',
});
