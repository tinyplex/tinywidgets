/** @jsx createElement */

import React from 'react';
import {ChevronDown, ChevronRight} from 'lucide-react';
import {Button} from '../Button/index.tsx';
import {classNames} from '../index.ts';
import {
  useCollapsibleOpen,
  useSetCollapsibleOpen,
} from '../Ui/SessionStore.tsx';
import {
  button,
  buttonOpen,
  collapsible,
  collapsibleOpen,
  content,
} from './index.css.ts';

const {createElement, useState, useCallback, useRef} = React;

export const Collapsible = ({
  id = '',
  icon: Icon,
  label = <div />,
  labelRight = <div />,
  className,
  children,
}: {
  id?: string;
  icon?: React.ComponentType<{className?: string}>;
  label?: React.ReactNode;
  labelRight?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) => {
  // State is in session Store if id is present, otherwise here in component.
  const storedIsOpen = useCollapsibleOpen(id) ?? false;
  const setStoredIsOpen = useSetCollapsibleOpen(id);
  const [stateIsOpen, setStateIsOpen] = useState(false);

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
