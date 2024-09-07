import {style} from '@vanilla-extract/css';
import {theme} from '../index.css.ts';

export const ui = style({
  display: 'flex',
  height: '100dvh',
  width: '100dvw',
  color: theme.foreground,
});
