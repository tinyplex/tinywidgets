/** @jsx createElement */

import type {ComponentType, ReactNode} from 'react';
import {ChevronDown, ChevronRight} from 'lucide-react';
import {Button} from '../Button/index.tsx';
import {
  classNames,
  createElement,
  useCallback,
  useRef,
  useState,
} from '../index.ts';
import {
  useCollapsibleOpen,
  useSetCollapsibleOpen,
} from '../stores/SessionStore.tsx';
import {
  button,
  buttonOpen,
  collapsible,
  collapsibleOpen,
  content,
} from './index.css.ts';

export const Collapsible = ({
  id = '',
  icon: Icon,
  label = <div />,
  labelRight = <div />,
  startOpen = false,
  className,
  children,
}: {
  id?: string;
  icon?: ComponentType<{className?: string}>;
  label?: ReactNode;
  labelRight?: ReactNode;
  startOpen?: boolean;
  className?: string;
  children: ReactNode;
}) => {
  // State is in session Store if id is present, otherwise here in component.
  const storedIsOpen = useCollapsibleOpen(id) ?? startOpen;
  const setStoredIsOpen = useSetCollapsibleOpen(id);
  const [stateIsOpen, setStateIsOpen] = useState(startOpen);

  const isOpen = id ? storedIsOpen : stateIsOpen;
  const setIsOpen = id ? setStoredIsOpen : setStateIsOpen;

  const [render, setRender] = useState(isOpen);
  const timer = useRef<Timer>();

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
        label={label}
        labelRight={labelRight}
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
