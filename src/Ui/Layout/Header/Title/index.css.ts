import {style} from '@vanilla-extract/css';
import {displayFlexRow, justify} from '../../../../atoms.css.ts';
import {dimensions, large} from '../../../../index.ts';

export const title = style([
  displayFlexRow,
  justify,
  large({width: dimensions.sideNavWidth, marginRight: '-1rem'}),
]);
