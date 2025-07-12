import {style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const wrapper = style({
  position: 'relative',
});

export const flyout = style({
  padding: dimensions.padding,
  borderRadius: dimensions.radius,
  boxShadow: colors.shadow,
  border: colors.border,
  height: 'fit-content',
  overflow: 'auto',
  backgroundColor: colors.background,
  position: 'absolute',
  top: 'calc(2rem+2px)',
  left: 0,
});

export const anchoredFlyout = style({
  top: 'anchor(bottom)',
  left: 'anchor(left)',
});
