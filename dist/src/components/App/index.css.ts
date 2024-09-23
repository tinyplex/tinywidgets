import {style} from '@vanilla-extract/css';
import {large} from '../../common/functions.tsx';
import {colors} from '../../css/colors.css.ts';
import {dimensions, dimensionsClass} from '../../css/dimensions.css.ts';

export const app = style([dimensionsClass, {color: colors.foreground}]);

export const appLayout = style({
  display: 'flex',
  height: '100dvh',
  width: '100dvw',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: dimensions.padding,
  padding: dimensions.padding,
  position: 'fixed',
  boxShadow: colors.shadow,
  backdropFilter: 'blur(8px)',
  backgroundColor: colors.backgroundHaze,
  left: 0,
  right: 0,
  height: dimensions.topNavHeight,
  borderBottom: colors.border,
  zIndex: 2,
});

export const topNav = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: dimensions.padding,

  flex: 1,
});

export const sideNavButton = style(large({display: 'none'}));

export const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: dimensions.padding,
  ...large({
    width: `calc(${dimensions.sideNavWidth} - 2 * ${dimensions.padding})`,
  }),
});

export const sideNav = style({
  position: 'fixed',
  padding: dimensions.padding,
  backgroundColor: colors.background2,
  overflow: 'auto',
  borderRight: colors.border,
  width: dimensions.sideNavWidth,
  bottom: 0,
  left: `calc(-1.2 * ${dimensions.sideNavWidth})`,
  top: dimensions.topNavHeight,
  height: `calc(100dvh - ${dimensions.topNavHeight})`,
  overscrollBehavior: 'contain',
  transition: 'left .2s ease-in-out',
  ...large({left: 0}),
});

export const sideNavOpen = style({left: 0});

export const main = style({
  flex: 1,
  backgroundColor: colors.background,
  overflow: 'auto',
  padding: dimensions.padding,
  paddingTop: `calc(${dimensions.topNavHeight} + ${dimensions.padding})`,
});

export const mainHasSideNav = style(
  large({
    paddingLeft: `calc(${dimensions.sideNavWidth} + ${dimensions.padding})`,
  }),
);
