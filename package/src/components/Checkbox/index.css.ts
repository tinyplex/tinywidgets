import {style} from '@vanilla-extract/css';
import {dimensions} from '../../css/dimensions.css';
import {colors} from '../../index.css';

export const checkbox = style({
  display: 'inline-block',
  boxShadow: colors.shadow + ' inset',
  borderRadius: dimensions.radius,
  border: colors.border,
  padding: '0.5rem',
  height: '2rem',
  width: '2rem',
  margin: '5px',
});
