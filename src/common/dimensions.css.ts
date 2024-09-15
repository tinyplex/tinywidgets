import {style} from '@vanilla-extract/css';

export const dimensions = {
  padding: '1rem',
  radius: '0.5rem',
};

export const radiusLike = {
  borderRadius: dimensions.radius,
};

export const paddingLike = {
  padding: dimensions.padding,
};

export const axisLike = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: dimensions.padding,
};

export const iconSize = style({
  width: '1rem',
  height: '1rem',
});
