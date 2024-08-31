import {style} from '@vanilla-extract/css';
import {displayFlexRow, justify} from '../../../../atoms.css.ts';
import {large} from '../../../../index.ts';
import {dimensions} from '../../index.css.ts';

export const title = style([
  displayFlexRow,
  justify,
  large({width: dimensions.sideNavWidth, marginRight: '-1rem'}),
]);
