import {style} from '@vanilla-extract/css';
import {dimensions, theme} from '../../../index.css';
import {large} from '../../../index.ts';

export const main = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  backgroundColor: theme.background,
  overflow: 'auto',
  paddingTop: dimensions.topNavHeight,
  ...large({paddingLeft: dimensions.sideNavWidth}),
});
