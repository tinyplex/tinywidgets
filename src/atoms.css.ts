import {style} from '@vanilla-extract/css';
import {theme} from './index.css';

export const padding1 = style({
  padding: '1rem',
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

export const overflowScroll = style({
  overflow: 'scroll',
});

export const flex1 = style({
  flex: 1,
});
