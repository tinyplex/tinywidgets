import {style} from '@vanilla-extract/css';
import {background, displayFlexColumn} from '../../../index.css.ts';
import {large} from '../../../index.ts';
import {dimensions} from '../../Layout/index.css.ts';

export const main = style([
  displayFlexColumn,
  background,
  {
    flex: 1,
    overflow: 'scroll',
    ...large({
      paddingLeft: dimensions.sideNavWidth,
    }),
  },
]);
