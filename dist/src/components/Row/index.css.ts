import {style, styleVariants} from '@vanilla-extract/css';
import {dimensions} from '../../css/dimensions.css';
import {notLarge} from '../../css/queries';

export const row = style({
  display: 'grid',
  width: '100%',
  gap: dimensions.padding,
  ...notLarge({gridTemplateColumns: '1fr'}),
});

export const rowVariants = styleVariants({
  '1|1': {gridTemplateColumns: '1fr 1fr'},
  '1|2': {gridTemplateColumns: '1fr 2fr'},
  '2|1': {gridTemplateColumns: '2fr 1fr'},
  '1|1|1': {gridTemplateColumns: '1fr 1fr 1fr'},
  '1|3': {gridTemplateColumns: '1fr 3fr'},
  '3|1': {gridTemplateColumns: '3fr 1fr'},
  '1|1|1|1': {gridTemplateColumns: '1fr 1fr 1fr 1fr'},
});
