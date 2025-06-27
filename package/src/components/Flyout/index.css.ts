import {style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const wrapper = style({
  position: 'relative',
});

export const flyout = style({
  position: 'absolute',
  top: 0,
  padding: dimensions.padding,
  borderRadius: dimensions.radius,
  boxShadow: colors.shadow,
  border: colors.border,
  height: 'fit-content',
  overflow: 'auto',
});
