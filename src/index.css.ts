import {
  createTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';

export const theme = createThemeContract({
  background: null,
  backgroundHaze: null,
  backgroundHover: null,
  foreground: null,
  border: null,
  shadow: null,
  accent: null,
  accentHover: null,
  accentContrast: null,
});

const light = {
  background: 'hsl(0,0%,90%)',
  backgroundHaze: 'hsla(0,0%,90%,0.5)',
  backgroundHover: 'hsl(0,0%,85%)',
  foreground: 'hsl(0,0%,10%)',
  border: 'hsl(340,5%,80%)',
  shadow: '0 1px 2px 0 hsla(340,5%,80%,0.5)',
  accent: 'hsl(340,80%,50%)',
  accentHover: 'hsl(340,80%,45%)',
  accentContrast: 'hsl(0,0%,100%)',
};

const dark = {
  background: 'hsl(0,0%,10%)',
  backgroundHaze: 'hsla(0,0%,10%,0.5)',
  backgroundHover: 'hsl(0,0%,15%)',
  foreground: 'hsl(0,0%,90%)',
  border: 'hsl(340,5%,20%)',
  shadow: '0 1px 2px 0 hsla(0,0%,0%,0.5)',
  accent: 'hsl(340,80%,50%)',
  accentHover: 'hsl(340,80%,45%)',
  accentContrast: 'hsl(0,0%,100%)',
};

export const squareButton = {
  display: 'inline-block',
  width: '1rem',
  minWidth: '1rem',
  height: '1rem',
  minHeight: '1rem',
  userSelect: 'none',
  cursor: 'pointer',
} as const;

export const dimensions = {
  padding: '1rem',
  radius: '0.5rem',
  titleWidth: '18rem',
  sideNavWidth: '20rem',
  topNavHeight: '4rem',
  articleWidth: '60rem',
  footerHeight: '10rem',
};

globalStyle('*', {
  margin: 0,
  padding: 0,
  lineHeight: '1rem',
  boxSizing: 'border-box',
});

globalStyle('html', {
  textRendering: 'optimizeLegibility',
  fontWeight: 400,
});

globalStyle('article h1,article h2,article h3,article p', {
  margin: '1rem 0',
  lineHeight: '1.75rem',
});

export const themeLight = createTheme(theme, light);
globalStyle(`html:has(${themeLight})`, {
  backgroundColor: light.background,
});

export const themeDark = createTheme(theme, dark);
globalStyle(`html:has(${themeDark})`, {
  backgroundColor: dark.background,
});
