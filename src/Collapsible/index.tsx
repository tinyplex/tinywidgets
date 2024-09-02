/** @jsx createElement */

import React from 'react';
import {Button} from '../Button/index.tsx';
import {button, collapsible, content} from './index.css.ts';

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
  variant?: keyof typeof collapsible;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const timer = useRef<Timer>();

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setHasContent(!isOpen), isOpen ? 200 : 0);
  }, [isOpen]);

  return (
    <div className={collapsible[isOpen ? 1 : 0]}>
      <Button
        onClick={toggle}
        icon={Icon}
        label={label}
        labelRight={labelRight}
        className={button}
      />
      {hasContent ? <div className={content}>{children}</div> : null}
    </div>
  );
};
