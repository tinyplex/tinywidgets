import {useCallback, useEffect, useState, type ComponentType} from 'react';
import {classNames} from '../../common/functions.tsx';
import {iconSize} from '../../css/dimensions.css.ts';
import {
  icon,
  iconVariants,
  input,
  inputVariants,
  inputWithIconVariants,
  wrapper,
} from './index.css.ts';

/**
 * The `TextInput` component displays a managed text input with an existing
 * value.
 *
 * @param props The props for the component.
 * @returns The TextInput component.
 * @example
 * ```tsx
 * <TextInput
 *   initialText="42"
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 * This example shows the TextInput component.
 * @example
 * ```tsx
 * <TextInput icon={Lucide.Search} placeholder="Search..." />
 * ```
 * This example shows the TextInput component with an inset icon and
 * placeholder.
 * @example
 * ```tsx
 * <TextInput initialText="42" variant="small" />
 * ```
 * This example shows the `small` variant of the TextInput component.
 * @example
 * ```tsx
 * <TextInput icon={Lucide.Search} placeholder="Search..." variant="small" />
 * ```
 * This example shows the `small` variant of the TextInput component with an
 * inset icon and placeholder.
 * @icon Lucide.TextCursorInput
 */
export const TextInput = ({
  initialText,
  placeholder,
  onChange,
  icon: Icon,
  alt,
  className,
  variant = 'default',
  ref,
}: {
  /**
   * An optional initial text value.
   */
  readonly initialText?: string;
  /**
   * An optional placeholder string.
   */
  readonly placeholder?: string;
  /**
   * A handler called when the text is changed.
   */
  readonly onChange?: (text: string) => void;
  /**
   * An optional component which renders an icon on the left of the input, and
   * which must accept a className prop.
   */
  readonly icon?: ComponentType<{className?: string}>;
  /**
   * Alternative text shown when the user hovers over the input.
   */
  readonly alt?: string;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
  /**
   * A variant of the input, one of:
   * - `default`
   * - `small`
   */
  readonly variant?: keyof typeof inputVariants;
  /**
   * A ref to the underlying input element.
   */
  ref?: React.RefObject<HTMLInputElement | null>;
}) => {
  const [text, setText] = useState(initialText ?? '');

  const change = useCallback(
    (value: string) => {
      setText(value);
      onChange?.(value);
    },
    [onChange],
  );

  const handleChange = useCallback(
    ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => change(value),
    [change],
  );

  useEffect(() => setText(initialText ?? ''), [initialText]);

  return (
    <div className={wrapper}>
      {Icon ? (
        <Icon className={classNames(iconSize, icon, iconVariants[variant])} />
      ) : null}
      <input
        value={text}
        placeholder={placeholder}
        className={classNames(
          input,
          inputVariants[variant],
          Icon && inputWithIconVariants[variant],
          className,
        )}
        onChange={handleChange}
        title={alt}
        ref={ref}
      />
    </div>
  );
};
