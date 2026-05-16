import {style} from '@vanilla-extract/css';
import {notLarge} from '../../common/functions.tsx';
import {dimensions} from '../../css/dimensions.css.ts';

export const summary = style({
  display: 'grid',
  gap: dimensions.padding,
  gridTemplateColumns: `6rem 1fr`,
  width: '100%',
  ...notLarge({gridTemplateColumns: '1fr'}),
});

export const image = style({
  height: '6rem',
  width: '6rem',
});
