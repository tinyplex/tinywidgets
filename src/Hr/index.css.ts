import {style} from '@vanilla-extract/css';
import {colors} from '../common/colors.css';
import {dimensions} from '../common/dimensions.css';

export const hr = style({
  border: 'none',
  borderBottom: `solid 1px ${colors.border}`,
  margin: `${dimensions.padding} 0`,
  height: '1px',
  width: '100%',
});
