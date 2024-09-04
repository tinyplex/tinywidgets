import {style} from '@vanilla-extract/css';
import {dimensions} from '../index.css';

export const axis = style({
  display: 'flex',
  alignItems: 'center',
});

export const justifyStyle = style({
  justifyContent: 'space-between',
});

export const verticalStyle = style({
  flexDirection: 'column',
});

export const gapStyle = style({
  gap: dimensions.padding,
});
