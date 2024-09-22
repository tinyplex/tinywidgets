import type {ComponentType, ReactNode} from 'react';
import React, {useCallback, useRef, useState} from 'react';
import {ChevronDown, ChevronRight} from 'lucide-react';
import {classNames} from '../../css/render.tsx';
import {
  useCollapsibleIsOpen,
  useSetCollapsibleIsOpenCallback,
} from '../../stores/SessionStore.tsx';
import {Button} from '../Button/index.tsx';
import {
  button,
  buttonOpen,
  collapsible,
  collapsibleOpen,
  content,
} from './index.css.ts';

/**
 * The Collapsible component displays a titled box that can be expanded or
 * collapsed. If the `id` prop is provided, its state is preserved between page
 * reloads.
 *
 * @param props The props for the component.
 * @returns The Collapsible component.
 * @example
 * ```tsx
 * <Collapsible
 *   title="TinyWidgets"
 * >
 *  <p>Peekaboo!</p>
 * </Collapsible>
 * ```
 * This example shows the basic Collapsible component.
 * @example
 * ```tsx
 * <Collapsible
 *   title="TinyWidgets"
 *   icon={Lucide.Grid3x3}
 *   startOpen={true}
 * >
 *  <p>Already open</p>
 * </Collapsible>
 * ```
 * This example shows a Collapsible component with an icon and which starts
 * open.
 * @example
 * ```tsx
 * <Collapsible
 *   title="TinyWidgets"
 *   id="example"
 * >
 *  <p>Reload the window</p>
 * </Collapsible>
 * ```
 * This example shows a Collapsible component where its state is preserved
 * between page reloads.
 * @icon Lucide.PanelTopOpen
 */
export const Collapsible = ({
  icon: Icon,
  title = <div />,
  titleRight = <div />,
  startOpen = false,
  id = '',
  className,
  children,
}: {
  /**
   * An optional component which renders an icon for the top of the collapsible
   * component, and which must accept a className prop.
   */
  icon?: ComponentType<{className?: string}>;
  /**
   * An optional component, element, or string which renders the title of
   * the top of the component.
   */
  title?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders a second title
   * on the right side of the top of the component.
   */
  titleRight?: ComponentType | ReactNode;
  /**
   * Whether the section should start opened up.
   */
  startOpen?: boolean;
  /**
   * An Id which will allow the state to be preserved between page reloads.
   */
  id?: string;
  /**
   * An extra CSS class name for the component.
   */
  className?: string;
  /**
   * The children of the component, that go inside the collapsible section.
   */
  children: ReactNode;
}) => {
  const storedIsOpen = useCollapsibleIsOpen(id) ?? startOpen;
  const setStoredIsOpen = useSetCollapsibleIsOpenCallback(id);
  const [stateIsOpen, setStateIsOpen] = useState(startOpen);

  const isOpen = id ? storedIsOpen : stateIsOpen;
  const setIsOpen = id ? setStoredIsOpen : setStateIsOpen;

  const [render, setRender] = useState(isOpen);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setRender(!isOpen), isOpen ? 200 : 0);
  }, [id, isOpen]);

  return (
    <div className={classNames(collapsible, isOpen && collapsibleOpen)}>
      <Button
        onClick={toggle}
        icon={Icon}
        title={title}
        titleRight={titleRight}
        iconRight={isOpen ? ChevronDown : ChevronRight}
        className={classNames(button, render && buttonOpen)}
        current={render}
      />
      {render ? (
        <div className={classNames(content, className)}>{children}</div>
      ) : null}
    </div>
  );
};
