import {
  createTheme,
  createThemeContract,
  globalStyle,
  style,
} from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  transition: 'background-color 0.2s',
});

globalStyle('html', {
  fontFamily: 'Inter,-apple-system,BlinkMacSystemFont,sans-serif',
  textRendering: 'optimizeLegibility',
  fontWeight: 400,
  overflow: 'hidden',
});

export const theme = createThemeContract({
  background: null,
  text: null,
  border: null,
});

export const themeLight = createTheme(theme, {
  background: 'rgb(246,246,246)',
  text: 'rgb(23,23,23)',
  border: 'rgb(239,239,239)',
});

export const themeDark = createTheme(theme, {
  background: 'rgb(24,24,27)',
  text: 'rgb(161,161,170)',
  border: 'rgb(39,39,42)',
});

export const padding1 = style({
  padding: '1rem',
});

export const displayFlexRow = style({
  display: 'flex',
});

export const displayFlexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const justify = style({
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const positionFixed = style({
  position: 'fixed',
});

export const background = style({
  backgroundColor: theme.background,
});
