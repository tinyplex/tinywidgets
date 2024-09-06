import { style } from '@vanilla-extract/css';
import { dimensions, theme } from '../../index.css.ts';
import { large } from '../../index.ts';

export const main = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  backgroundColor: theme.background,
  overflow: 'auto',
  paddingTop: dimensions.topNavHeight,
});

export const mainHasSideNav = style(
  large({paddingLeft: dimensions.sideNavWidth}),
);
