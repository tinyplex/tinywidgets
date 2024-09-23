import React, {ComponentType, ReactNode} from 'react';

/**
 * The useDark hook returns whether the user is viewing the application in dark
 * mode.
 *
 * @returns A boolean where `true` means 'dark' and `false` means 'light' mode.
 * @example
 * ```tsx
 * <Card>
 *   Currently in {useDark() ? 'dark' : 'light'} mode
 * </Card>
 * ```
 * This example shows the hook returning the current mode.
 */
export const classNames = (
  ...classes: (string | boolean | null | undefined)[]
) => classes.filter(Boolean).join(' ');

export const renderComponentOrNode = (
  ComponentOrNode: ComponentType | ReactNode,
  fallback: ReactNode = null,
) =>
  ComponentOrNode instanceof Function ? (
    <ComponentOrNode />
  ) : (
    (ComponentOrNode ?? fallback)
  );
