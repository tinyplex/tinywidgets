import {Moon, Sun, SunMoon} from 'lucide-react';
import {
  useDarkChoice,
  useToggleDarkChoiceCallback,
} from '../../stores/LocalStore.tsx';
import {Button} from '../Button/index.tsx';

const darkIcons = [Sun, Moon, SunMoon];
const darkChoices = ['Light always', 'Dark always', 'Auto'];

/**
 * The `DarkModeButton` component displays a button that cycles the application
 * between light, dark, and automatic color modes.
 *
 * The choice is shared with the enclosing `App` component and persisted across
 * reloads. Automatic mode follows the user's system color scheme preference.
 *
 * @param props The props for the component.
 * @returns The DarkModeButton component.
 * @example
 * ```tsx
 * <DarkModeButton />
 * ```
 * This example shows the dark mode control outside of the standard application
 * header.
 * @icon Lucide.SunMoon
 */
export const DarkModeButton = ({
  className,
  ref,
}: {
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
  /**
   * A ref to the underlying button element.
   */
  readonly ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const darkChoice = useDarkChoice();
  const toggleDarkChoice = useToggleDarkChoiceCallback();

  return (
    <Button
      variant="icon"
      onClick={toggleDarkChoice}
      icon={darkIcons[darkChoice]}
      alt={darkChoices[darkChoice]}
      className={className}
      ref={ref}
    />
  );
};
