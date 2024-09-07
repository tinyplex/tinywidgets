import {
  createTheme,
  createThemeContract,
  createVar,
  fallbackVar,
  globalStyle,
  style,
} from '@vanilla-extract/css';
import {small} from './';

export const accentHue = createVar();

export const theme = createThemeContract({
  accentHue: null,
  backgroundHue: null,
  accent: null,
  accentLight: null,
  accentHover: null,
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
});

const themeCommon = {
  accentHue: fallbackVar(accentHue, '8'),
  backgroundHue: `calc(${theme.accentHue} + 180)`,
  accent: `oklch(50% .11 ${theme.accentHue})`,
  accentLight: `oklch(71% .16 ${theme.accentHue})`,
  accentHover: `oklch(45% .1 ${theme.accentHue})`,
  accentContrast: '#fff',
};

const light = {
  ...themeCommon,
  underneath: '#fff',
  background: `oklch(99% .01 ${theme.backgroundHue})`,
  background2: `oklch(95% .01 ${theme.backgroundHue})`,
  backgroundHaze: `oklch(99% .01 ${theme.backgroundHue} / .5)`,
  backgroundHover: `oklch(90% .01 ${theme.backgroundHue})`,
  foreground: `oklch(30% .01 ${theme.accentHue})`,
  foreground2: `oklch(50% .01 ${theme.accentHue})`,
  border: `oklch(90% .01 ${theme.backgroundHue})`,
  shadow: '0 1px 4px 0 hsl(0 0 20 / .1)',
};

const dark = {
  ...themeCommon,
  underneath: '#000',
  background: `oklch(20% .01 ${theme.backgroundHue})`,
  background2: `oklch(15% .01 ${theme.backgroundHue})`,
  backgroundHaze: `oklch(21% 0% ${theme.backgroundHue} / .5)`,
  backgroundHover: `oklch(25% .01 ${theme.backgroundHue})`,
  foreground: `oklch(90% .01 ${theme.accentHue})`,
  foreground2: `oklch(50% .01 ${theme.accentHue})`,
  border: `oklch(30% .01 ${theme.backgroundHue})`,
  shadow: '0 1px 4px 0 #000',
};

export const dimensions = {
  padding: '1rem',
  radius: '0.5rem',
  titleWidth: '18rem',
  sideNavWidth: '20rem',
  sideNavWidthHidden: '-30rem',
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
  ...small({
    fontSize: '12px',
  }),
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
