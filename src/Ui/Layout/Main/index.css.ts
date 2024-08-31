import {style} from '@vanilla-extract/css';
import {
  background,
  displayFlexColumn,
  flex1,
  overflowAuto,
} from '../../../atoms.css.ts';
import {dimensions, large} from '../../../index.ts';

export const main = style([
  displayFlexColumn,
  background,
  overflowAuto,
  flex1,
  {
    ...large({paddingLeft: dimensions.sideNavWidth}),
  },
]);
