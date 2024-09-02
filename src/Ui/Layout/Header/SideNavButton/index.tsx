/** @jsx createElement */
import React from 'react';
import {Menu, X} from 'lucide-react';
import {Button} from '../../../../Button/index.tsx';
import {useSideNav, useToggleSideNav} from '../../../SessionStore.tsx';

const {createElement} = React;

export const SideNavButton = () => (
  <Button
    variant="icon"
    onClick={useToggleSideNav()}
    icon={useSideNav() ? X : Menu}
  />
);
