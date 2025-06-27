import {ComponentType, useCallback, useState, type ReactNode} from 'react';
import {classNames} from '../../common/functions';
import {
  useCollapsibleIsOpen,
  useSetCollapsibleIsOpenCallback,
} from '../../stores/SessionStore';
import {Button} from '../Button';
import {buttonVariants} from '../Button/index.css';
import {flyout, wrapper} from './index.css';

/**
 * The `Flyout` component displays a simple rectangular container that pops up
 * out of an icon.
 *
 * @param props The props for the component.
 * @returns Flyout Row component.
 * @example
 * ```tsx
 * <Flyout icon={Lucide.LucideHelpCircle}>
 *   <h1>Welcome</h1>
 *   <Hr />
 *   <p>We hope you enjoy TinyWidgets</p>
 * </Flyout>
 * ```
 * This example shows a simple card.
 * @icon Lucide.LucideArrowDownSquare
 */
export const Flyout = ({
  icon,
  variant,
  startOpen,
  id = '',
  className,
  children,
}: {
  /**
   * An icon to click on to open up the flyout, and which must accept a
   * className prop.
   */
  readonly icon: ComponentType<{className?: string}>;
  /**
   * A variant of the button used for the flyout, one of:
   * - `default`
   * - `icon`
   * - `accent`
   * - `ghost`
   * - `item`
   */
  readonly variant?: keyof typeof buttonVariants;
  /**
   * Whether the flyout should start opened up.
   */
  readonly startOpen?: boolean;
  /**
   * An Id which will allow the state to be preserved between page reloads.
   */
  readonly id?: string;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
  /**
   * The children of the component that go inside the card.
   */
  readonly children: ReactNode;
}) => {
  const storedIsOpen = useCollapsibleIsOpen(id) ?? startOpen;
  const setStoredIsOpen = useSetCollapsibleIsOpenCallback(id);
  const [stateIsOpen, setStateIsOpen] = useState(startOpen);

  const isOpen = id ? storedIsOpen : stateIsOpen;
  const setIsOpen = id ? setStoredIsOpen : setStateIsOpen;

  const handleClick = useCallback(
    () => setIsOpen(!isOpen),
    [setIsOpen, isOpen],
  );

  return (
    <span className={wrapper}>
      <Button icon={icon} variant={variant} onClick={handleClick} />
      {isOpen ? (
        <div className={classNames(flyout, className)}>{children}</div>
      ) : null}
    </span>
  );
};
