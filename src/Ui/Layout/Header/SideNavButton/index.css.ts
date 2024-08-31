import {style} from '@vanilla-extract/css';
import {padding1, theme} from '../../../../index.css.ts';
import {large} from '../../../../index.ts';

export const sideNavButton = style([
  padding1,
  {
    display: 'block',
    visibility: 'hidden',
    flex: 0,
    minWidth: '2rem',
    height: '2rem',
    ...large({display: 'none'}),
    selectors: {
      '&::after': {
        visibility: 'visible',
        width: '2rem',
        height: '2rem',
        content: '',
        display: 'inline-block',
        background: theme.text,
        mask: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' stroke='red' stroke-width='4' fill='none'><path d='M20 30h60 M20 50h60 M20 70h60'/></svg>")`,
      },
      '&:checked::after': {
        mask: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' stroke='red' stroke-width='4' fill='none'><path d='M20 20l60 60M20 80l60-60' /></svg>")`,
      },
    },
  },
]);
