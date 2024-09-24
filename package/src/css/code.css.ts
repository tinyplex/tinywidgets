/* eslint-disable max-len */
import {createTheme, createThemeContract} from '@vanilla-extract/css';

/**
 * The `code` object exposes the CSS variables used by TinyWidgets for coloring
 * the code blocks, so that you can use them directly in your own application.
 *
 * The values are derived from the [prism-one-dark](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css) and [prism-one-light](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-light.css) themes. The full set of members is:
 * - `mono-1`
 * - `mono-2`
 * - `mono-3`
 * - `hue-1`
 * - `hue-2`
 * - `hue-3`
 * - `hue-4`
 * - `hue-5`
 * - `hue-5-2`
 * - `hue-6`
 * - `hue-6-2`
 * - `syntax-fg`
 * - `syntax-bg`
 * - `syntax-gutter`
 * - `syntax-guide`
 * - `syntax-accent`
 *
 * You can use these variables directly in React components that take style
 * attributes, like this:
 *
 * ```tsx
 * <code style={{color: code['hue-2']}}>function</code>
 * ```
 *
 * And if you are using Vanilla-Extract for your app's styles, use them in your
 * style declarations like this:
 *
 * ```tsx
 * export const functionStyle = style({color: code['hue-2']});
 * ```
 *
 * @example
 * ```tsx
 * <Card>
 *   <Code code={code['mono-1']} />
 *   <Hr />
 *   <Row variant="1|1|1">
 *     <code style={{color: code['hue-2']}}>function</code>
 *     <code style={{color: code['hue-3']}}>keyword</code>
 *     <code style={{color: code['hue-4']}}>string</code>
 *   </Row>
 * </Card>
 * ```
 * This example shows one of the values within the `code` object, and then
 * applies some of them to custom code components. Change the dark mode to see
 * the colors respond.
 * @icon Lucide.Palette
 */
export const code = createThemeContract({
  'mono-1': null,
  'mono-2': null,
  'mono-3': null,
  'hue-1': null,
  'hue-2': null,
  'hue-3': null,
  'hue-4': null,
  'hue-5': null,
  'hue-5-2': null,
  'hue-6': null,
  'hue-6-2': null,
  'syntax-fg': null,
  'syntax-bg': null,
  'syntax-gutter': null,
  'syntax-guide': null,
  'syntax-accent': null,
});

export const codeLight = createTheme(code, {
  'mono-1': `hsl(230, 8%, 24%)`,
  'mono-2': `hsl(230, 6%, 44%)`,
  'mono-3': `hsl(230, 4%, 64%)`,
  'hue-1': `hsl(198, 99%, 37%)`,
  'hue-2': `hsl(221, 87%, 60%)`,
  'hue-3': `hsl(301, 63%, 40%)`,
  'hue-4': `hsl(119, 34%, 47%)`,
  'hue-5': `hsl(5, 74%, 59%)`,
  'hue-5-2': `hsl(344, 84%, 43%)`,
  'hue-6': `hsl(35, 99%, 36%)`,
  'hue-6-2': `hsl(35, 99%, 40%)`,
  'syntax-fg': `hsl(230, 8%, 24%)`,
  'syntax-bg': `hsl(230, 1%, 98%)`,
  'syntax-gutter': `hsl(230, 1%, 62%)`,
  'syntax-guide': `hsla(230, 8%, 24%, 0.2)`,
  'syntax-accent': `hsl(230, 100%, 66%)`,
});

export const codeDark = createTheme(code, {
  'mono-1': `hsl(220, 14%, 71%)`,
  'mono-2': `hsl(220, 9%, 55%)`,
  'mono-3': `hsl(220, 10%, 40%)`,
  'hue-1': `hsl(187, 47%, 55%)`,
  'hue-2': `hsl(207, 82%, 66%)`,
  'hue-3': `hsl(286, 60%, 67%)`,
  'hue-4': `hsl(95, 38%, 62%)`,
  'hue-5': `hsl(355, 65%, 65%)`,
  'hue-5-2': `hsl(5, 48%, 51%)`,
  'hue-6': `hsl(29, 54%, 61%)`,
  'hue-6-2': `hsl(39, 67%, 69%)`,
  'syntax-fg': `hsl(220, 14%, 71%)`,
  'syntax-bg': `hsl(220, 13%, 18%)`,
  'syntax-gutter': `hsl(220, 14%, 45%)`,
  'syntax-guide': `hsla(220, 14%, 71%, 0.15)`,
  'syntax-accent': `hsl(220, 100%, 66%)`,
});
