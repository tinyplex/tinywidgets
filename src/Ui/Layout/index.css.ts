import {style, styleVariants} from '@vanilla-extract/css';
import {theme, themeDark, themeLight} from '../../index.css.ts';

export const layout = style({
  height: '100vh',
  width: '100vw',
  color: theme.foreground,
});

export const layoutTheme = styleVariants({
  0: [layout, themeLight],
  1: [layout, themeDark],
});
