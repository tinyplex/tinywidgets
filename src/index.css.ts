import {
  createTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';

export const padding = '1rem';

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
  sideNavWidth: '20rem',
  topNavHeight: '4rem',
  articleWidth: '60rem',
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

globalStyle('h1,h2,h3,p', {
  margin: '1rem 0',
  lineHeight: '1.5rem',
});

export const theme = createThemeContract({
  background: null,
  backgroundHover: null,
  foreground: null,
  border: null,
  shadow: null,
  accent: null,
  accentHover: null,
  accentContrast: null,
});

export const themeLight = createTheme(theme, {
  background: 'hsl(0,0%,90%)',
  backgroundHover: 'hsl(0,0%,85%)',
  foreground: 'hsl(0,0%,10%)',
  border: 'hsl(340,5%,80%)',
  shadow: 'hsla(340,5%,80%,0.5)',
  accent: 'hsl(340,80%,50%)',
  accentHover: 'hsl(340,80%,45%)',
  accentContrast: 'hsl(0,0%,100%)',
});

export const themeDark = createTheme(theme, {
  background: 'hsl(0,0%,10%)',
  backgroundHover: 'hsl(0,0%,15%)',
  foreground: 'hsl(0,0%,90%)',
  border: 'hsl(340,5%,20%)',
  shadow: 'hsla(0,0%,0%,0.5)',
  accent: 'hsl(340,80%,50%)',
  accentHover: 'hsl(340,80%,45%)',
  accentContrast: 'hsl(0,0%,100%)',
});
