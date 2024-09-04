import {
  createTheme,
  createThemeContract,
  createVar,
  fallbackVar,
  globalStyle,
  style,
} from '@vanilla-extract/css';

export const accent = createVar();
export const accentContrast = createVar();

export const theme = createThemeContract({
  accent: null,
  accentContrast: null,
  underneath: null,
  background: null,
  background2: null,
  backgroundHaze: null,
  backgroundHover: null,
  foreground: null,
  foreground2: null,
  border: null,
  shadow: null,
  accentHover: null,
});

const light = {
  accent: fallbackVar(accent, '#d81b60'),
  accentContrast: fallbackVar(accentContrast, `#fff`),
  underneath: '#fff',
  background: `oklch(from ${theme.accent} 98% 1% calc(h + 180))`,
  background2: `oklch(from ${theme.accent} 95% 1% calc(h + 180))`,
  backgroundHaze: `oklch(from ${theme.background} l c h / .5)`,
  backgroundHover: `oklch(from ${theme.accent} 90% 1% calc(h + 180))`,
  foreground: `oklch(from ${theme.accent} 30% 1% h)`,
  foreground2: `oklch(from ${theme.accent} 50% 1% h)`,
  border: `oklch(from ${theme.accent} 90% 1% calc(h + 180))`,
  shadow: '0 1px 4px 0 hsl(0 0 20 / .1)',
  accentHover: `oklch(from ${theme.accent} calc(l * 90%) c h)`,
};

const dark = {
  accent: fallbackVar(accent, '#d81b60'),
  accentContrast: fallbackVar(accentContrast, `#fff`),
  underneath: '#000',
  background: `oklch(from ${theme.accent} 20% 1% calc(h + 180))`,
  background2: `oklch(from ${theme.accent} 15% 1% calc(h + 180))`,
  backgroundHaze: `oklch(from ${theme.background} 21% 0% h / .5)`,
  backgroundHover: `oklch(from ${theme.accent} 25% 1% calc(h + 180))`,
  foreground: `oklch(from ${theme.accent} 90% 1% h)`,
  foreground2: `oklch(from ${theme.accent} 50% 1% h)`,
  border: `oklch(from ${theme.accent} 30% 1% calc(h + 180))`,
  shadow: '0 1px 4px 0 #000',
  accentHover: `oklch(from ${theme.accent} calc(l * 90%) c h)`,
};

export const dimensions = {
  padding: '1rem',
  radius: '0.5rem',
  titleWidth: '18rem',
  sideNavWidth: '20rem',
  topNavHeight: '4rem',
  articleWidth: '60rem',
  footerHeight: '10rem',
};

export const shadowLike = {
  boxShadow: theme.shadow,
};

export const borderLike = {
  ...shadowLike,
  border: `1px solid ${theme.border}`,
};

export const radiusLike = {
  borderRadius: dimensions.radius,
};

export const paddingLike = {
  padding: dimensions.padding,
};

export const axisLike = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: dimensions.padding,
};

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  scrollbarWidth: 'thin',
  color: 'inherit',
  fontSize: 'inherit',
});

globalStyle('html', {
  fontSize: '14px',
  lineHeight: '1.5em',
  textRendering: 'optimizeLegibility',
  fontWeight: 400,
});

globalStyle('h1', {fontSize: '1.5rem'});

globalStyle('h2', {fontSize: '1.25rem'});

export const themeLight = createTheme(theme, light);
globalStyle(`html:has(${themeLight})`, {
  backgroundColor: light.underneath,
});

export const themeDark = createTheme(theme, dark);
globalStyle(`html:has(${themeDark})`, {
  backgroundColor: dark.underneath,
});

export const iconSize = style({
  width: '1rem',
  height: '1rem',
});
