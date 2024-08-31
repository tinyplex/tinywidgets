import {style, styleVariants} from '@vanilla-extract/css';
import {dimensions, theme} from '../../../index.css';
import {large} from '../../../index.ts';

const mainBase = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  backgroundColor: theme.background,
  overflow: 'auto',
  paddingTop: dimensions.topNavHeight,
});

export const main = styleVariants({
  0: [mainBase],
  1: [mainBase, large({paddingLeft: dimensions.sideNavWidth})],
});
