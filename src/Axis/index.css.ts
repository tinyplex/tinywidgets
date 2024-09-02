import {style} from '@vanilla-extract/css';
import {axisLike} from '../index.css';

export const axis = style(axisLike);

export const verticalStyle = style({
  flexDirection: 'column',
});

export const flushStyle = style({
  gap: 0,
});
