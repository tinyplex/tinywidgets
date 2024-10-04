/* eslint-disable max-len */
import React from 'react';
import {classNames} from '../../common/functions.tsx';
import {pre} from './index.css.ts';

/**
 * The `Code` component displays a block of pre-formatted code, and uses PrismJS
 * to parse its syntax if you have imported it globally. The coloring is based
 * on the [prism-one-dark](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css) and [prism-one-light](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-light.css) themes.
 *
 * PrismJS is not included in the TinyWidgets bundle, so you need to include it
 * in your project, and, if you want to highlight one of the non-default Prism
 * languages, you will need to explicitly include that too.
 *
 * @param props The props for the component.
 * @returns The Code component.
 * @example
 * ```tsx
 * <Code
 *   code={`
 * const a = 1;
 *   `}
 * />
 * ```
 * This example shows a simple block of code, defaulting to the `javascript`
 * language.
 * @example
 * ```tsx
 * <Code
 *   code={`
 * const a: number = 1;
 *   `}
 *   language="typescript"
 * />
 * ```
 * This example shows the use of the `typescript` language, which has been
 * explicitly imported in addition to the Prism default languages
 * @example
 * ```tsx
 * <Code
 *   code={`
 * import React from 'react';
 * const App = () => (
 *   <div>Hello, world!</div>
 * );
 *   `}
 *   language="tsx"
 * />
 * ```
 * This example shows a simple block of code, defaulting to the `jsx` language,
 * similarly imported explicitly.
 * @example
 * ```tsx
 * <Code
 *   code={`
 * h1 {
 *   font-size: 1.5rem;
 * }
 *   `}
 *   language="css"
 * />
 * ```
 * This example shows the use of the `css` language.
 * @icon Lucide.SquareCode
 */
export const Code = ({
  code,
  language = 'javascript',
  className,
}: {
  /**
   * The code to display, as a string.
   */
  readonly code: string;
  /**
   * An optional indication of the language. Defaults to `javascript`.
   */
  readonly language?: string;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
}) => {
  const prism = globalThis.Prism;
  return (
    <pre className={classNames(pre, className)}>
      <code
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: (prism
            ? prism.highlight(code, prism.languages?.[language], language)
            : code.replace(
                /[\u00A0-\u9999<>&]/g,
                (i) => `&#${i.charCodeAt(0)};`,
              )
          ).trim(),
        }}
      />
    </pre>
  );
};
