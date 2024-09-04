/** @jsx createElement */

import {Menu, X} from 'lucide-react';
import {Button} from '../../../../Button/index.tsx';
import {createElement} from '../../../../index.ts';
import {useSideNavOpen, useToggleSideNavOpen} from '../../../SessionStore.tsx';
import {sideNavButton} from './index.css';

export const SideNavButton = () => (
  <Button
    variant="icon"
    onClick={useToggleSideNavOpen()}
    icon={useSideNavOpen() ? X : Menu}
    className={sideNavButton}
  />
);
