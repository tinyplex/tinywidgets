import {style} from '@vanilla-extract/css';
import {dimensions} from '../../../../index.css';
import {large} from '../../../../index.ts';

export const title = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ...large({width: dimensions.sideNavWidth, marginRight: '-1rem'}),
});
