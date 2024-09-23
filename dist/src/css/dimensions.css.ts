import {createTheme, fallbackVar, style} from '@vanilla-extract/css';

const classAndObject = createTheme({
  logo: fallbackVar('var(--tinyWidgets-logo)', '2rem'),
  avatar: fallbackVar('var(--tinyWidgets-avatar)', '2rem'),
  icon: fallbackVar('var(--tinyWidgets-icon)', '1rem'),
  padding: fallbackVar('var(--tinyWidgets-padding)', '1rem'),
  radius: fallbackVar('var(--tinyWidgets-radius)', '0.5rem'),
  sideNavWidth: fallbackVar('var(--tinyWidgets-sideNavWidth)', '20rem'),
  topNavHeight: fallbackVar('var(--tinyWidgets-topNavHeight)', '4rem'),
});
export const dimensionsClass = classAndObject[0];

/**
 * The `dimensions` object exposes the CSS variables used by TinyWidgets for
 * various sizes and lengths, so that you can use them directly in your own
 * application.
 *
 * The full set of members is:
 * - `logo`
 * - `avatar`
 * - `icon`
 * - `padding`
 * - `radius`
 * - `sideNavWidth`
 * - `topNavHeight`
 *
 * You can use these variables directly in React components that take style
 * attributes, like this:
 *
 * ```tsx
 * <div style={{width: dimensions.logo, height: dimensions.logo}} />
 * ```
 *
 * And if you are using Vanilla-Extract for your app's styles, use them in your
 * style declarations like this:
 *
 * ```tsx
 * export const logoStyle = style({
 *   width: dimensions.logo,
 *   height: dimensions.logo,
 * });
 * ```
 *
 * @example
 * ```tsx
 * <Card>
 *   <Code code={dimensions['logo']} />
 *   <Hr />
 *   <div style={{
 *     width: dimensions.logo,
 *     height: dimensions.logo,
 *     background: 'oklch(50% 0.11 0)',
 *   }}/>
 * </Card>
 * ```
 * This example shows one of the values within the `dimensions` object, and then
 * applies some of them to a custom component.
 * @icon Lucide.Ruler
 */
export const dimensions = classAndObject[1];

export const iconSize = style({
  flexShrink: 0,
  height: dimensions.icon,
  width: dimensions.icon,
});
