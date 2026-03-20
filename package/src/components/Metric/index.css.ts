import {style} from '@vanilla-extract/css';

export const metric = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const metricLabel = style({
  gap: '0.5rem',
});

export const metricNumber = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
});
