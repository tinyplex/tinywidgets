import {style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const card = style({
  border: colors.border,
  borderRadius: dimensions.radius,
  boxShadow: colors.shadow,
  height: 'fit-content',
  overflow: 'auto',
  padding: dimensions.padding,
});
