/**
 * The `breaks` object contains the media query breakpoints that TinyWidget uses
 * to distinguish small, medium, and large screens.
 *
 * Currently, the main impact of the `large` member is that screens narrower than this number of
 * pixels will get a collapsed side bar. Screens narrower than the `small` number of
 * pixels will get a slightly smaller font.
 * @example
 * ```tsx
 * <Code code={JSON.stringify(breaks, null, 2)} />
 * ```
 * This example gets the breakpoint values.
 * @icon Lucide.Ruler
 */
export const breaks = {small: 448, large: 768};
