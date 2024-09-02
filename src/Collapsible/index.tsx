/** @jsx createElement */

import React from 'react';
import {ChevronDown, ChevronRight} from 'lucide-react';
import {Button} from '../Button/index.tsx';
import {classNames} from '../index.ts';
import {
  button,
  buttonOpen,
  collapsible,
  collapsibleOpen,
  content,
} from './index.css.ts';

const {createElement, useState, useCallback, useRef} = React;

export const Collapsible = ({
  icon: Icon,
  label = <div />,
  labelRight = <div />,
  children,
}: {
  icon?: React.ComponentType<{size?: string | number}>;
  label?: React.ReactNode;
  labelRight?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [render, setRender] = useState(false);
  const timer = useRef<Timer>();

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setRender(!isOpen), isOpen ? 200 : 0);
  }, [isOpen]);

  return (
    <div className={classNames(collapsible, isOpen && collapsibleOpen)}>
      <Button
        onClick={toggle}
        icon={Icon}
        label={label}
        labelRight={labelRight}
        iconRight={isOpen ? ChevronDown : ChevronRight}
        className={classNames(button, isOpen && buttonOpen)}
        current={render}
      />
      {render ? <div className={content}>{children}</div> : null}
    </div>
  );
};
