import {style} from '@vanilla-extract/css';
import {dimensions} from '../../../../index.css';
import {large} from '../../../../index.ts';

export const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: dimensions.padding,
  ...large({width: dimensions.titleWidth}),
});
