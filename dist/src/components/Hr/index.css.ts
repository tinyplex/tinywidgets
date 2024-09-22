import {style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const hr = style({
  border: 'none',
  borderBottom: colors.border,
  margin: `${dimensions.padding} 0`,
  height: '1px',
  width: '100%',
});
