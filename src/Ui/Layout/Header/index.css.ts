import {style} from '@vanilla-extract/css';
import {
  background,
  displayFlexRow,
  justify,
  padding1,
} from '../../../index.css.ts';
import {large} from '../../../index.ts';
import {dimensions} from '../index.css.ts';

export const header = style([
  displayFlexRow,
  background,
  justify,
  padding1,
  {
    gap: '1rem',
    height: dimensions.topNavHeight,
    background: 'rgba(255,0,0,0.5)',
    ...large({}),
  },
]);
