import {style} from '@vanilla-extract/css';
import {
  background,
  displayFlexColumn,
  flex1,
  overflowScroll,
} from '../../../atoms.css.ts';
import {large} from '../../../index.ts';
import {dimensions} from '../../Layout/index.css.ts';

export const main = style([
  displayFlexColumn,
  background,
  overflowScroll,
  flex1,
  {
    ...large({paddingLeft: dimensions.sideNavWidth}),
  },
]);
