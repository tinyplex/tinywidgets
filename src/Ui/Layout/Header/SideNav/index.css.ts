import {style, styleVariants} from '@vanilla-extract/css';
import {dimensions, theme} from '../../../../index.css.ts';
import {large} from '../../../../index.ts';

const sideNavBase = style({
  position: 'fixed',
  padding: dimensions.padding,
  backgroundColor: theme.background,
  boxShadow: theme.shadow,
  overflow: 'auto',
  borderRight: `1px solid ${theme.border}`,
  width: dimensions.sideNavWidth,
  bottom: 0,
  left: '-' + dimensions.sideNavWidth,
  top: dimensions.topNavHeight,
  height: `calc(100vh - ${dimensions.topNavHeight})`,
  overscrollBehavior: 'contain',
  transition: 'left .2s ease-in-out',
  ...large({left: 0}),
});

export const sideNav = styleVariants({
  0: [sideNavBase],
  1: [sideNavBase, {left: 0}],
});
