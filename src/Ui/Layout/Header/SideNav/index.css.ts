import {style} from '@vanilla-extract/css';
import {dimensions, theme} from '../../../../index.css.ts';
import {large} from '../../../../index.ts';
import {layout} from '../../index.css.ts';
import {sideNavButton} from '../SideNavButton/index.css.ts';

export const sideNav = style({
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
  transition: 'left 0.2s ease-in-out',
  ...large({left: 0}),
  selectors: {[`${layout}:has(${sideNavButton}:checked) &`]: {left: 0}},
});
