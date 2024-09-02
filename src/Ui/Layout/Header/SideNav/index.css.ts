import {style} from '@vanilla-extract/css';
import {dimensions, paddingLike, theme} from '../../../../index.css.ts';
import {large} from '../../../../index.ts';

export const sideNav = style([
  paddingLike,
  {
    position: 'fixed',
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
  },
  large({left: 0}),
]);

export const open = style({left: 0});
