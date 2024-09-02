import {style} from '@vanilla-extract/css';
import {theme} from '../../index.css.ts';

export const layout = style({
  height: '100vh',
  width: '100vw',
  color: theme.foreground,
});
