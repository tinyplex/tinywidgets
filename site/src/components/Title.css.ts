import {style} from '@vanilla-extract/css';
import {colors} from 'tinywidgets/css';

export const title = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: colors.foregroundBright,
});
