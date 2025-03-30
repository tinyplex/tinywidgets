import {style, styleVariants} from '@vanilla-extract/css';
import {notLarge} from '../../common/functions.tsx';
import {dimensions} from '../../css/dimensions.css.ts';

export const row = style({
  display: 'grid',
  width: '100%',
  gap: dimensions.padding,
  ...notLarge({gridTemplateColumns: '1fr'}),
});

export const rowVariants = styleVariants({
  '1|1': {gridTemplateColumns: `calc((100% - ${dimensions.padding})/2) 1fr`},
  '1|2': {
    gridTemplateColumns: `calc((100% - ${dimensions.padding}*2)/3) 1fr`,
  },
  '2|1': {
    gridTemplateColumns: `1fr calc((100% - ${dimensions.padding}*2)/3)`,
  },
  '1|1|1': {
    gridTemplateColumns: `1fr 1fr 1fr`,
  },
  '1|3': {
    gridTemplateColumns: `1fr calc((100% - ${dimensions.padding}*3)/4)`,
  },
  '3|1': {
    gridTemplateColumns: `calc((100% - ${dimensions.padding}*3)/4) 1fr`,
  },
  '1|1|1|1': {gridTemplateColumns: '1fr 1fr 1fr 1fr'},
});
