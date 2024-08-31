import { style, styleVariants } from '@vanilla-extract/css';
import {
  background,
  dimensions,
  displayFlexColumn,
  displayFlexRow,
  justify,
  padding1,
  positionFixed,
  theme,
} from '../index.css';

export const root = style([
  displayFlexRow,
  {
    height: '100vh',
    width: '100vw',
    marginLeft: dimensions.sideBarWidth,
    color: theme.text,
  },
]);

export const header = style([
  positionFixed,
  displayFlexColumn,
  background,
  {width: dimensions.sideBarWidth},
]);

export const title = style([
  displayFlexRow,
  justify,
  padding1,
  {height: dimensions.topBarHeight},
]);

export const topBar = style([
  positionFixed,
  displayFlexRow,
  justify,
  padding1,
  {
    left: dimensions.sideBarWidth,
    height: dimensions.topBarHeight,
    paddingRight: dimensions.topBarHeight,
  },
]);

const darkButtonBase = style({
  display: 'inline-block',
  position: 'fixed',
  top: '1.5rem',
  right: '1.5rem',
  width: '1rem',
  height: '1rem',
  userSelect: 'none',
  cursor: 'pointer',
});

export const darkButton = styleVariants({
  0: [
    darkButtonBase,
    {
      content: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" stroke-width="4" stroke="black" fill="none"><path d="M32.3 32.3a25 25 0 1 0 0.01-0.01z"/><path d="M50 20v-10M71.2 28.8l5-5M80 50h10M71.2 71.2l5 5M50 80v10M28.8 71.2l-5 5M20 50h-10M28.8 28.8l-5 -5"/></svg>');`,
    },
  ],
  1: [
    darkButtonBase,
    {
      content: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" stroke-width="4" stroke="white" fill="none"><path d="M50 20a30 30 0 1 1-21.2 51.2 30 30 0 0 0 21.2-51.2z"/></svg>');`,
    },
  ],
  2: [
    darkButtonBase,
    {
      content: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" stroke-width="4" stroke="grey" fill="none"><path d="M20 20l60 60z"/><path d="M57.3 50.4a30 30 0 0 0-7.4-30.4a30 30 0 0 1 24.4 47.6"/><path d="M29.2 36.2A25 25 0 0 0 63.8 70.9"/><path d="M50 80v10M28.8 71.2l-5 5M20 50h-10"/></svg>');`,
    },
  ],
});

export const sideBar = style([padding1, {width: dimensions.sideBarWidth}]);

export const main = style([
  displayFlexColumn,
  background,
  {flex: 1, paddingTop: dimensions.topBarHeight},
]);

export const article = style([padding1, background, {flex: 1}]);

export const footer = style([displayFlexRow, justify, padding1, background]);
