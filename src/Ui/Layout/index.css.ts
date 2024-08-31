import { style, styleVariants } from '@vanilla-extract/css';
import {
  displayFlexColumn,
  theme,
  themeDark,
  themeLight,
} from '../../index.css.ts';
import { large } from '../../index.ts';

export const dimensions = {
  sideBarWidth: '20rem',
  topBarHeight: '4rem',
};

export const layout = style([
  displayFlexColumn,
  {
    height: '100vh',
    width: '100vw',
    color: theme.text,
    ...large({flexDirection: 'row'}),
  },
]);

export const layoutTheme = styleVariants({
  0: [layout, themeLight],
  1: [layout, themeDark],
});
