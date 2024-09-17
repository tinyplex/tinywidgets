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

const light = {
  ...common,
  underneath: '#fff',
  background: `oklch(99% .01 ${colors.backgroundHue})`,
  background2: `oklch(95% .01 ${colors.backgroundHue})`,
  backgroundHaze: `oklch(99% .01 ${colors.backgroundHue} / .5)`,
  backgroundHover: `oklch(90% .01 ${colors.backgroundHue})`,
  foreground: `oklch(30% .01 ${colors.accentHue})`,
  foreground2: `oklch(50% .01 ${colors.accentHue})`,
  border: `1px solid oklch(90% .01 ${colors.backgroundHue})`,
  shadow: '0 1px 4px 0 hsl(0 0 20 / .1)',
};

const dark = {
  ...common,
  underneath: '#000',
  background: `oklch(20% .01 ${colors.backgroundHue})`,
  background2: `oklch(15% .01 ${colors.backgroundHue})`,
  backgroundHaze: `oklch(21% 0% ${colors.backgroundHue} / .5)`,
  backgroundHover: `oklch(25% .01 ${colors.backgroundHue})`,
  foreground: `oklch(90% .01 ${colors.accentHue})`,
  foreground2: `oklch(50% .01 ${colors.accentHue})`,
  border: `1px solid oklch(30% .01 ${colors.backgroundHue})`,
  shadow: '0 1px 4px 0 #000',
};

export const colorsLight = createTheme(colors, light);
globalStyle(`html:has(${colorsLight})`, {
  backgroundColor: light.underneath,
});

export const colorsDark = createTheme(colors, dark);
globalStyle(`html:has(${colorsDark})`, {
  backgroundColor: dark.underneath,
});
