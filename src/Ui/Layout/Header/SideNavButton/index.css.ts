import {style} from '@vanilla-extract/css';
import {padding1} from '../../../../atoms.css.ts';
import {squareButton, theme} from '../../../../index.css.ts';
import {large} from '../../../../index.ts';

export const sideNavButton = style([
  padding1,
  {
    visibility: 'hidden',
    flex: 0,
    ...squareButton,
    ...large({display: 'none'}),
    selectors: {
      '&::after': {
        ...squareButton,
        visibility: 'visible',
        content: '',
        display: 'inline-block',
        background: theme.foreground,
        mask: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' stroke='black' stroke-width='4' fill='none'><path d='M20 30h60 M20 50h60 M20 70h60'/></svg>")`,
      },
      '&:checked::after': {
        mask: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' stroke='black' stroke-width='4' fill='none'><path d='M20 20l60 60M20 80l60-60' /></svg>")`,
      },
    },
  },
]);
