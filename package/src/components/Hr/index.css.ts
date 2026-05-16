import {style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const hr = style({
  border: 'none',
  borderBottom: colors.border,
  height: '1px',
  margin: `${dimensions.padding} 0`,
  width: '100%',
});
