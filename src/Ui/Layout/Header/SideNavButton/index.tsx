/** @jsx createElement */
import React from 'react';
import {Menu, X} from 'lucide-react';
import {Button} from '../../../../Button/index.tsx';
import {useSideNavOpen, useToggleSideNavOpen} from '../../../SessionStore.tsx';
import {sideNavButton} from './index.css';

const {createElement} = React;

export const SideNavButton = () => (
  <Button
    variant="icon"
    onClick={useToggleSideNavOpen()}
    icon={useSideNavOpen() ? X : Menu}
    className={sideNavButton}
  />
);
