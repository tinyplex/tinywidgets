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
  backdropFilter: 'blur(8px)',
  backgroundColor: colors.backgroundHaze,
  borderBottom: colors.border,
  boxShadow: colors.shadow,
  gap: dimensions.padding,
  height: dimensions.topNavHeight,
  justifyContent: 'space-between',
  left: 0,
  padding: dimensions.padding,
  position: 'fixed',
  right: 0,
  zIndex: 2,
});

export const topNav = style({
  flex: 1,
  gap: dimensions.padding,
  justifyContent: 'space-between',
});

export const sideNavButtonResponsive = style(
  large({display: 'none!important'}),
);

export const title = style({
  ...large({
    width: `calc(${dimensions.sideNavWidth} - 2 * ${dimensions.padding})`,
  }),
});

export const sideNav = style({
  backgroundColor: colors.background2,
  borderRight: colors.border,
  bottom: 0,
  height: `calc(100dvh - ${dimensions.topNavHeight})`,
  left: `calc(-1.2 * ${dimensions.sideNavWidth})`,
  overflow: 'auto',
  overscrollBehavior: 'contain',
  padding: dimensions.padding,
  position: 'fixed',
  top: dimensions.topNavHeight,
  transition: 'left .2s ease-in-out, visibility 0s linear .2s',
  visibility: 'hidden',
  width: dimensions.sideNavWidth,
});

export const sideNavOpen = style({
  left: 0,
  transitionDelay: '0s',
  visibility: 'visible',
});

export const sideNavResponsive = style(
  large({left: 0, transitionDelay: '0s', visibility: 'visible'}),
);

export const sideNavNever = style({
  left: 0,
  transitionDelay: '0s',
  visibility: 'visible',
});

export const main = style({
  backgroundColor: colors.background,
  flex: 1,
  overflow: 'auto',
  padding: dimensions.padding,
  paddingTop: `calc(${dimensions.topNavHeight} + ${dimensions.padding})`,
});

export const mainHasSideNav = style(
  large({
    paddingLeft: `calc(${dimensions.sideNavWidth} + ${dimensions.padding})`,
  }),
);

export const mainHasSideNavNever = style({
  paddingLeft: `calc(${dimensions.sideNavWidth} + ${dimensions.padding})`,
});

export const mainHasFooter = style({
  paddingBottom: `calc(${dimensions.footerHeight} + ${dimensions.padding})`,
});

export const footer = style({
  backdropFilter: 'blur(8px)',
  backgroundColor: colors.backgroundHaze,
  borderTop: colors.border,
  bottom: 0,
  boxShadow: colors.shadow,
  gap: dimensions.padding,
  height: dimensions.footerHeight,
  justifyContent: 'right',
  left: 0,
  paddingLeft: dimensions.padding,
  paddingRight: dimensions.padding,
  position: 'fixed',
  right: 0,
});
