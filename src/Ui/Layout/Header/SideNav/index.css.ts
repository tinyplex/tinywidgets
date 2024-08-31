import {style} from '@vanilla-extract/css';
import {background, padding1} from '../../../../index.css.ts';
import {large} from '../../../../index.ts';
import {dimensions, layout} from '../../index.css.ts';
import {sideNavButton} from '../SideNavButton/index.css.ts';

export const sideNav = style([
  padding1,
  background,
  {
    width: dimensions.sideNavWidth,
    overflow: 'scroll',
    position: 'fixed',
    bottom: '0',
    left: '-' + dimensions.sideNavWidth,
    top: dimensions.topNavHeight,
    transition: 'left 0.2s ease-in-out',
    background: 'blue',
    ...large({
      left: 0,
    }),
    selectors: {[`${layout}:has(${sideNavButton}:checked) &`]: {left: 0}},
  },
]);
