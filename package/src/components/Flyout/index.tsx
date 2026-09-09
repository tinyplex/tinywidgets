import {
  useCallback,
  useMemo,
  useState,
  type ComponentType,
  type ReactNode,
} from 'react';
import {createPortal} from 'react-dom';
import {getUniqueId} from 'tinybase';
import {classNames} from '../../common/functions';
import {
  useCollapsibleIsOpen,
  useSetCollapsibleIsOpenCallback,
} from '../../stores/SessionStore';
import {usePortal} from '../App';
import {Button} from '../Button';
import {buttonVariants} from '../Button/index.css.ts';
import {anchoredFlyout, flyout, wrapper} from './index.css';

const supportsAnchors =
  typeof CSS != 'undefined' && CSS.supports('anchor-name', '--');

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
 * This example shows a flyout from a simple button.
 * @example
 * ```tsx
 * <Flyout
 *   title="Toggle"
 *   icon={Lucide.LucidePanelTopOpen}
 *   openIcon={Lucide.LucidePanelTopClose}
 *   startOpen={true}
 * >
 *   <p>We hope you enjoy TinyWidgets</p>
 * </Flyout>
 * ```
 * This example shows a flyout, starting off open, with a title on the button,
 * and with a different icon for open and closed states.
 * @icon Lucide.LucideArrowDownSquare
 */
export const Flyout = ({
  icon,
  openIcon,
  title,
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
   * An optional icon to show when the flyout is open, and which must accept a
   * className prop.
   */
  readonly openIcon?: ComponentType<{className?: string}>;
  /**
   * An optional component, element, or string which renders the title of
   * the button.
   */
  readonly title?: ComponentType | ReactNode;
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

  const anchor = useMemo(() => '--' + getUniqueId(5), []);
  const portal = usePortal();

  const buttonProps = {
    icon: isOpen ? (openIcon ?? icon) : icon,
    title,
    variant,
    onClick: handleClick,
  };
  return supportsAnchors && portal ? (
    <>
      <Button {...buttonProps} anchorName={anchor} />
      {isOpen
        ? createPortal(
            <div
              className={classNames(flyout, anchoredFlyout, className)}
              style={{positionAnchor: anchor}}
            >
              {children}
            </div>,
            portal,
          )
        : null}
    </>
  ) : (
    <div className={wrapper}>
      <Button {...buttonProps} />
      {isOpen ? (
        <div className={classNames(flyout, className)}>{children}</div>
      ) : null}
    </div>
  );
};
