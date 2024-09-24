import {colors} from '../../../package/src/index.css';
import {style} from '@vanilla-extract/css';

export const title = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: colors.foregroundBright,
});
