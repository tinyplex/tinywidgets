import {LucideCheck} from 'lucide-react';
import {useCallback, useState} from 'react';
import {classNames} from '../../common/functions.tsx';
import {Button} from '../Button/index.tsx';
import {checkbox, checkboxVariants} from './index.css.ts';

/**
 * The `Checkbox` component displays a managed checkbox with an optional default
 * checked state.
 *
 * @param props The props for the component.
 * @returns The Checkbox component.
 * @example
 * ```tsx
 * <Checkbox onChange={(value) => console.log(value)} />
 * ```
 * This example shows the Checkbox component without a default checked state.
 * @example
 * ```tsx
 * <Checkbox
 *   initialChecked={true}
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 * This example shows the Checkbox component with a default checked state.
 * @example
 * ```tsx
 * <Checkbox variant="small" />
 * ```
 * This example shows the `small` variant of the Checkbox component.
 * @icon Lucide.LucideCheckSquare
 */
export const Checkbox = ({
  initialChecked,
  onChange,
  alt,
  className,
  variant = 'default',
  ref,
}: {
  /**
   * An optional value for whether the box is checked.
   */
  readonly initialChecked?: boolean;
  /**
   * A handler called when the text is changed.
   */
  readonly onChange?: (checked: boolean) => void;
  /**
   * Alternative text shown when the user hovers over the input.
   */
  readonly alt?: string;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
  /**
   * A variant of the checkbox, one of:
   * - `default`
   * - `small`
   */
  readonly variant?: keyof typeof checkboxVariants;
  /**
   * A ref to the underlying button element.
   */
  ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const [checked, setChecked] = useState(initialChecked ?? false);
  const handleClick = useCallback(() => {
    setChecked(!checked);
    onChange?.(!checked);
  }, [checked, onChange]);
  return (
    <Button
      className={classNames(checkbox, checkboxVariants[variant], className)}
      onClick={handleClick}
      alt={alt}
      ref={ref}
      icon={checked ? LucideCheck : undefined}
    />
  );
};
