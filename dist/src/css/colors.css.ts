import {
  createTheme,
  createThemeContract,
  fallbackVar,
  globalStyle,
} from '@vanilla-extract/css';

export const colors = createThemeContract({
  accentHue: null,
  backgroundHue: null,
  accent: null,
  accentLight: null,
  accentHover: null,
  accentContrast: null,
  background: null,
  background2: null,
  backgroundHaze: null,
  backgroundHover: null,
  foreground: null,
  foregroundBright: null,
  foregroundDim: null,
  border: null,
  shadow: null,
});

const common = {
  accentHue: fallbackVar('var(--tinyWidgets-accentHue)', '8'),
  backgroundHue: fallbackVar(
    'var(--tinyWidgets-backgroundHue)',
    `calc(${colors.accentHue} + 180)`,
  ),
  accent: `oklch(50% .11 ${colors.accentHue})`,
  accentLight: `oklch(71% .16 ${colors.accentHue})`,
  accentHover: `oklch(45% .1 ${colors.accentHue})`,
  accentContrast: '#fff',
};

export const colorsLight = createTheme(colors, {
  ...common,
  background: `oklch(99% .01 ${colors.backgroundHue})`,
  background2: `oklch(95% .01 ${colors.backgroundHue})`,
  backgroundHaze: `oklch(99% .01 ${colors.backgroundHue} / .5)`,
  backgroundHover: `oklch(90% .01 ${colors.backgroundHue})`,
  foreground: `oklch(50% .01 ${colors.accentHue})`,
  foregroundBright: `oklch(10% .01 ${colors.accentHue})`,
  foregroundDim: `oklch(60% .01 ${colors.accentHue})`,
  border: `1px solid oklch(90% .01 ${colors.backgroundHue})`,
  shadow: '0 1px 4px 0 hsl(0 0 20 / .1)',
});
globalStyle(`html:has(${colorsLight})`, {
  backgroundColor: '#fff',
});

export const colorsDark = createTheme(colors, {
  ...common,
  background: `oklch(20% .01 ${colors.backgroundHue})`,
  background2: `oklch(15% .01 ${colors.backgroundHue})`,
  backgroundHaze: `oklch(21% 0% ${colors.backgroundHue} / .5)`,
  backgroundHover: `oklch(25% .01 ${colors.backgroundHue})`,
  foreground: `oklch(70% .01 ${colors.accentHue})`,
  foregroundBright: `oklch(90% .01 ${colors.accentHue})`,
  foregroundDim: `oklch(50% .01 ${colors.accentHue})`,
  border: `1px solid oklch(30% .01 ${colors.backgroundHue})`,
  shadow: '0 1px 4px 0 #000',
});
globalStyle(`html:has(${colorsDark})`, {
  backgroundColor: '#000',
});
