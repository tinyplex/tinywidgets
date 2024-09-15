import {createTheme, fallbackVar, style} from '@vanilla-extract/css';
import {colors} from '../common/colors.css.ts';
import {axisLike, dimensions, paddingLike} from '../common/dimensions.css.ts';
import {large} from '../common/media.ts';

export const [layoutDimensionsClass, layoutDimensions] = createTheme({
  sideNavWidth: fallbackVar('var(--tinyWidgets-App-sideNavWidth)', '20rem'),
  topNavHeight: fallbackVar('var(--tinyWidgets-App-topNavHeight)', '4rem'),
});

export const layout = style([
  layoutDimensionsClass,
  {
    display: 'flex',
    height: '100dvh',
    width: '100dvw',
    color: colors.foreground,
  },
]);

export const header = style([
  paddingLike,
  axisLike,
  {
    position: 'fixed',
    boxShadow: colors.shadow,
    backdropFilter: 'blur(8px)',
    backgroundColor: colors.backgroundHaze,
    left: 0,
    right: 0,
    height: layoutDimensions.topNavHeight,
    borderBottom: `1px solid ${colors.border}`,
    zIndex: 2,
  },
]);

export const topNav = style([
  {
    ...axisLike,
    flex: 1,
  },
]);

export const sideNavButton = style(large({display: 'none'}));

export const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: dimensions.padding,
  ...large({
    width: `calc(${layoutDimensions.sideNavWidth} - 2 * ${dimensions.padding})`,
  }),
});

export const sideNav = style([
  {
    position: 'fixed',
    padding: dimensions.padding,
    backgroundColor: colors.background2,
    overflow: 'auto',
    borderRight: `1px solid ${colors.border}`,
    width: layoutDimensions.sideNavWidth,
    bottom: 0,
    left: `calc(-1.2 * ${layoutDimensions.sideNavWidth})`,
    top: layoutDimensions.topNavHeight,
    height: `calc(100dvh - ${layoutDimensions.topNavHeight})`,
    overscrollBehavior: 'contain',
    transition: 'left .2s ease-in-out',
  },
  large({left: 0}),
]);

export const sideNavOpen = style({left: 0});

export const main = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  backgroundColor: colors.background,
  overflow: 'auto',
  padding: dimensions.padding,
  paddingTop: `calc(${layoutDimensions.topNavHeight} + ${dimensions.padding})`,
});

export const mainHasSideNav = style(
  large({
    paddingLeft: `calc(${layoutDimensions.sideNavWidth} + ${dimensions.padding})`,
  }),
);
