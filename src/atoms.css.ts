import {style} from '@vanilla-extract/css';
import {theme} from './index.css';
import {padding} from './index.css.ts';

export const padding1 = style({
  padding,
});

export const displayFlexRow = style({
  display: 'flex',
});

export const displayFlexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const justify = style({
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const positionFixed = style({
  position: 'fixed',
});

export const background = style({
  backgroundColor: theme.background,
});

export const overflowAuto = style({
  overflow: 'auto',
});

export const flex1 = style({
  flex: 1,
});

export const radius = style({
  borderRadius: '0.5rem',
});

export const shadow = style({
  boxShadow: `0 1px 2px 0 ${theme.shadow}`,
});
