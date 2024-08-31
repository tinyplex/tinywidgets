import {style} from '@vanilla-extract/css';
import {
  background,
  displayFlexColumn,
  flex1,
  overflowAuto,
} from '../../../atoms.css.ts';
import {dimensions} from '../../../index.css';
import {large} from '../../../index.ts';

export const main = style([
  displayFlexColumn,
  background,
  overflowAuto,
  flex1,
  {
    paddingTop: dimensions.topNavHeight,
    ...large({paddingLeft: dimensions.sideNavWidth}),
  },
]);
