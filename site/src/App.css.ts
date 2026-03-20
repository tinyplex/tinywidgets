import {style} from '@vanilla-extract/css';
import {colors} from 'tinywidgets/css';

export const article = style({
  width: '100%',
  maxWidth: '66rem',
  margin: '1rem auto',
});

export const title = style({
  gap: '0.5rem',
  color: colors.foregroundBright,
  cursor: 'pointer',
});
