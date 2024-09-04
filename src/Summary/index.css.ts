import {style} from '@vanilla-extract/css';

export const summary = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

export const summaryImage = style({
  flex: '0 0 6rem',
  width: '6rem',
  height: '6rem',
});

export const summaryContent = style({
  flex: 1,
});
