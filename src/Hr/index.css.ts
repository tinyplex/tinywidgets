import {style} from '@vanilla-extract/css';
import {dimensions, theme} from '../index.css';

export const hr = style({
  border: 'none',
  borderBottom: `solid 1px ${theme.border}`,
  margin: `${dimensions.padding} 0`,
  height: '1px',
  width: '100%',
});
