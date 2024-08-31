import {style, styleVariants} from '@vanilla-extract/css';
import {squareButton, theme} from '../../../../index.css';

const darkButtonBase = style({
  ...squareButton,
  selectors: {
    '&::after': {
      ...squareButton,
      content: '',
      background: theme.foreground,
    },
  },
});

export const darkButton = styleVariants({
  0: [
    darkButtonBase,
    {
      selectors: {
        '&::after': {
          mask: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' stroke-width='4' stroke='black' fill='none'><path d='M32.3 32.3a25 25 0 1 0 0.01-0.01z'/><path d='M50 20v-10M71.2 28.8l5-5M80 50h10M71.2 71.2l5 5M50 80v10M28.8 71.2l-5 5M20 50h-10M28.8 28.8l-5 -5'/></svg>")`,
        },
      },
    },
  ],
  1: [
    darkButtonBase,
    {
      selectors: {
        '&::after': {
          mask: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' stroke-width='4' stroke='black' fill='none'><path d='M50 20a30 30 0 1 1-21.2 51.2 30 30 0 0 0 21.2-51.2z'/></svg>")`,
        },
      },
    },
  ],
  2: [
    darkButtonBase,
    {
      selectors: {
        '&::after': {
          mask: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' stroke-width='4' stroke='black' fill='none'><path d='M20 20l60 60z'/><path d='M57.3 50.4a30 30 0 0 0-7.4-30.4a30 30 0 0 1 24.4 47.6'/><path d='M29.2 36.2A25 25 0 0 0 63.8 70.9'/><path d='M50 80v10M28.8 71.2l-5 5M20 50h-10'/></svg>")`,
        },
      },
    },
  ],
});
