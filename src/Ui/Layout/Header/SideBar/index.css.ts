import { style } from '@vanilla-extract/css';
import { background, padding1 } from '../../../../index.css.ts';
import { large } from '../../../../index.ts';
import { dimensions, layout } from '../../../Layout/index.css.ts';
import { hamburger } from '../Hamburger/index.css.ts';

export const sideBar = style([
  padding1,
  background,
  {
    width: dimensions.sideBarWidth,
    overflow: 'scroll',
    position: 'fixed',
    bottom: '0',
    left: '-' + dimensions.sideBarWidth,
    top: dimensions.topBarHeight,
    transition: 'left 0.2s ease-in-out',
    background: 'blue',
    ...large({
      transition: 'unset',
      left: 'unset',
    }),
    selectors: {[`${layout}:has(${hamburger}:checked) &`]: {left: 0}},
  },
]);
