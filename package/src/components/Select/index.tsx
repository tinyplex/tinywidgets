import {useCallback, useEffect, useState} from 'react';
import {classNames} from '../../common/functions.tsx';
import {select} from './index.css.ts';

/**
 * The `Select` component displays a managed select input with an existing
 * value.
 *
 * @param props The props for the component.
 * @returns The Select component.
 * @example
 * ```tsx
 * <Select
 *   initialOption="CA"
 *   options={{ AL: 'Albania', BE: 'Belgium', CA: 'Canada' }}
 *   onChange={(option) => console.log(option)}
 * />
 * ```
 * @icon Lucide.Combine
 */
export const Select = ({
  options,
  initialOption,
  onChange,
  alt,
  className,
  ref,
}: {
  /**
   * The options and labels to show in the select widget.
   */
  readonly options: {[option: string]: string};
  /**
   * An optional initial option.
   */
  readonly initialOption?: string;
  /**
   * A handler called when the option is changed.
   */
  readonly onChange?: (option: string) => void;
  /**
   * Alternative text shown when the user hovers over the input.
   */
  readonly alt?: string;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
  ref?: React.RefObject<HTMLSelectElement | null>;
}) => {
  const [option, setOption] = useState(initialOption ?? '');

  const change = useCallback(
    (value: string) => {
      setOption(value);
      onChange?.(value);
    },
    [onChange],
  );

  const handleChange = useCallback(
    ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) => change(value),
    [change],
  );

  useEffect(() => change(initialOption ?? ''), [change, initialOption]);

  return (
    <select
      value={option}
      className={classNames(select, className)}
      onChange={handleChange}
      title={alt}
      ref={ref}
    >
      {Object.entries(options).map(([eachOption, label]) => (
        <option key={eachOption} value={eachOption}>
          {label}
        </option>
      ))}
    </select>
  );
};
