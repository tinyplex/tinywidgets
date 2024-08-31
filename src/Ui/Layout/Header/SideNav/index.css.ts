import {style} from '@vanilla-extract/css';
import {
  background,
  overflowScroll,
  padding1,
  positionFixed,
} from '../../../../atoms.css.ts';
import {large} from '../../../../index.ts';
import {dimensions, layout} from '../../index.css.ts';
import {sideNavButton} from '../SideNavButton/index.css.ts';

export const sideNav = style([
  positionFixed,
  padding1,
  background,
  overflowScroll,
  {
    width: dimensions.sideNavWidth,
    bottom: '0',
    left: '-' + dimensions.sideNavWidth,
    top: dimensions.topNavHeight,
    transition: 'left 0.2s ease-in-out',
    ...large({left: 0}),
    selectors: {[`${layout}:has(${sideNavButton}:checked) &`]: {left: 0}},
  },
]);
