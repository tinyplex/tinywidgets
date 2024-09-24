/* eslint-disable max-len */
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import Prism from 'prismjs';
import React from 'react';
import {classNames} from '../../common/functions.tsx';
import {pre} from './index.css';

const {highlight, languages} = Prism;

/**
 * The `Code` component displays a block of pre-formatted code, and uses PrismJS
 * to parse its syntax. The coloring is based on the [prism-one-dark](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css) and [prism-one-light](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-light.css) themes.
 *
 * This component supports the default PrismJS languages (`markup`, `html`
 * , `xml`, `svg`, `mathml`, `ssml`, `atom`, `rss`, `css`, `clike`, `javascript`
 * , `js`), and specific additional languages (`jsx`, `typescript`, `ts`
 * , `tsx`).
 * Others can be added if there is demand! Please open an issue on GitHub.
 *
 * @param props The props for the component.
 * @returns The Code component.
 * @example
 * ```tsx
 * <Code
 *   code={`
 * import React from 'react';
 * const App = () => (
 *   <div>Hello, world!</div>
 * );
 *   `}
 * />
 * ```
 * This example shows a simple block of code, defaulting to the `jsx` language.
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
 * @example
 * ```tsx
 * <Code
 *   code={`
 * const a: number = 1;
 *   `}
 *   language="typescript"
 * />
 * ```
 * This example shows the use of the `tsx` language.
 * @icon Lucide.SquareCode
 */
export const Code = ({
  code,
  language = 'jsx',
  className,
}: {
  /**
   * The code to display, as a string.
   */
  readonly code: string;
  /**
   * An optional indication of the language. Defaults to `jsx`.
   */
  readonly language?: string;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
}) => {
  return (
    <pre className={classNames(pre, className)}>
      <code
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: highlight(code.trim(), languages[language], language),
        }}
      />
    </pre>
  );
};
