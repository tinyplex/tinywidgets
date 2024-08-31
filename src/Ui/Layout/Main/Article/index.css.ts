import {style} from '@vanilla-extract/css';
import {flex1, padding1} from '../../../../atoms.css.ts';
import {dimensions} from '../../../../index.css';

export const article = style([
  padding1,
  flex1,
  {
    width: '100%',
    maxWidth: dimensions.articleWidth,
    margin: '0 auto',
  },
]);
