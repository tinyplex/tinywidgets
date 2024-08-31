import {style, styleVariants} from '@vanilla-extract/css';
import {
  displayFlexColumn,
  theme,
  themeDark,
  themeLight,
} from '../../index.css.ts';

export const dimensions = {
  sideNavWidth: '20rem',
  topNavHeight: '4rem',
};

export const layout = style([
  displayFlexColumn,
  {
    height: '100vh',
    width: '100vw',
    color: theme.text,
  },
]);

export const layoutTheme = styleVariants({
  0: [layout, themeLight],
  1: [layout, themeDark],
});
