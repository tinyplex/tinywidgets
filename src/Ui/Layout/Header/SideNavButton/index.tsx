/** @jsx createElement */
import React from 'react';
import {useSetSideNav, useSideNav} from '../../../Store.tsx';
import {sideNavButton} from './index.css.ts';

const {createElement} = React;

export const SideNavButton = () => {
  return (
    <input
      className={sideNavButton}
      type="checkbox"
      checked={useSideNav() ?? false}
      onChange={useSetSideNav()}
    />
  );
};
