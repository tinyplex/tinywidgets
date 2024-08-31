import {style} from '@vanilla-extract/css';
import {padding1} from '../../../../atoms.css.ts';
import {dimensions} from '../../index.css.ts';

export const article = style([
  padding1,
  {
    flex: 1,
    width: '100%',
    maxWidth: dimensions.articleWidth,
    margin: '0 auto',
  },
]);
