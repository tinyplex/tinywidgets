import {
  createTheme,
  createThemeContract,
  fallbackVar,
  globalStyle,
} from '@vanilla-extract/css';

/**
 * The `colors` object exposes the CSS variables used by TinyWidgets for color
 * theming, so that you can use them directly in your own application.
 *
 * The full set of members is:
 * - `accentHue`
 * - `backgroundHue`
 * - `accent`
 * - `accentLight`
 * - `accentHover`
 * - `accentContrast`
 * - `accentBright`
 * - `background`
 * - `background2`
 * - `backgroundHaze`
 * - `backgroundHover`
 * - `backgroundExtreme`
 * - `foreground`
 * - `foregroundBright`
 * - `foregroundDim`
 * - `foregroundExtreme`
 * - `borderColor`
 * - `border`
 * - `shadow`
 *
 * You can use these variables directly in React components that take style
 * attributes, like this:
 *
 * ```tsx
 * <div style={{color: colors.accent}}>Accent</div>
 * ```
 *
 * And if you are using Vanilla-Extract for your app's styles, use them in your
 * style declarations like this:
 *
 * ```tsx
 * export const titleStyle = style({color: colors.accent});
 * ```
 *
 * @example
 * ```tsx
 * <Card>
 *   <Code code={colors.accentHue} />
 *   <Hr />
 *   <div style={{
 *     color: colors.accent,
 *     background: colors.background2,
 *     border: colors.border,
 *     boxShadow: colors.shadow,
 *     textAlign: 'center',
 *   }}>
 *     Accent on a background
 *   </div>
 * </Card>
 * ```
 * This example shows one of the values within the `colors` object, and then
 * applies some of them to a custom component. Change the dark mode to see the
 * background respond.
 * @icon Lucide.Palette
 */
export const colors = createThemeContract({
  accent: null,
  accentBright: null,
  accentContrast: null,
  accentHover: null,
  accentHue: null,
  accentLight: null,
  background: null,
  background2: null,
  backgroundExtreme: null,
  backgroundHaze: null,
  backgroundHover: null,
  backgroundHue: null,
  border: null,
  borderColor: null,
  foreground: null,
  foregroundBright: null,
  foregroundDim: null,
  foregroundExtreme: null,
  shadow: null,
});

const common = {
  accent: `oklch(50% .11 ${colors.accentHue})`,
  accentBright: `oklch(57.37% 0.2178 ${colors.accentHue})`,
  accentContrast: '#fff',
  accentHover: `oklch(45% .1 ${colors.accentHue})`,
  accentHue: fallbackVar('var(--tinyWidgets-accentHue)', '8'),
  accentLight: `oklch(71% .16 ${colors.accentHue})`,
  backgroundHue: fallbackVar(
    'var(--tinyWidgets-backgroundHue)',
    `calc(${colors.accentHue} + 180)`,
  ),
  border: `1px solid ${colors.borderColor}`,
};

export const colorsLight = createTheme(colors, {
  ...common,
  background: `oklch(99% .01 ${colors.backgroundHue})`,
  background2: `oklch(95% .01 ${colors.backgroundHue})`,
  backgroundExtreme: '#fff',
  backgroundHaze: `oklch(99% .01 ${colors.backgroundHue} / .5)`,
  backgroundHover: `oklch(90% .01 ${colors.backgroundHue})`,
  borderColor: `oklch(90% .01 ${colors.backgroundHue})`,
  foreground: `oklch(50% .01 ${colors.accentHue})`,
  foregroundBright: `oklch(10% .01 ${colors.accentHue})`,
  foregroundDim: `oklch(60% .01 ${colors.accentHue})`,
  foregroundExtreme: '#000',
  shadow: '0 1px 4px 0 hsl(0 0 20 / .1)',
});
globalStyle(`html:has(${colorsLight})`, {
  backgroundColor: '#fff',
});

export const colorsDark = createTheme(colors, {
  ...common,
  background: `oklch(20% .01 ${colors.backgroundHue})`,
  background2: `oklch(15% .01 ${colors.backgroundHue})`,
  backgroundExtreme: '#000',
  backgroundHaze: `oklch(21% 0% ${colors.backgroundHue} / .5)`,
  backgroundHover: `oklch(25% .01 ${colors.backgroundHue})`,
  borderColor: `oklch(30% .01 ${colors.backgroundHue})`,
  foreground: `oklch(85% .01 ${colors.accentHue})`,
  foregroundBright: `oklch(95% .01 ${colors.accentHue})`,
  foregroundDim: `oklch(60% .01 ${colors.accentHue})`,
  foregroundExtreme: '#fff',
  shadow: '0 1px 4px 0 #000',
});
globalStyle(`html:has(${colorsDark})`, {
  backgroundColor: '#000',
});
