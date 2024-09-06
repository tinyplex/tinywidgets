import { style } from '@vanilla-extract/css';
import { theme } from '../index.css.ts';

export const ui = style({
  display: 'flex',
  height: '100vh',
  width: '100vw',
  color: theme.foreground,
});
