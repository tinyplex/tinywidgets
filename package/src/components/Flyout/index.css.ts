import {style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const wrapper = style({
  position: 'relative',
});

export const flyout = style({
  backgroundColor: colors.background,
  border: colors.border,
  borderRadius: dimensions.radius,
  boxShadow: colors.shadow,
  height: 'fit-content',
  left: 0,
  overflow: 'auto',
  padding: dimensions.padding,
  position: 'absolute',
  top: 'calc(2rem + 2px)',
});

export const anchoredFlyout = style({
  left: 'anchor(left)',
  top: 'anchor(bottom)',
});
