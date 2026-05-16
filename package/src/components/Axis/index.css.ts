import {style, styleVariants} from '@vanilla-extract/css';

export const axis = style({
  alignItems: 'center',
  display: 'flex',
});

export const axisVariants = styleVariants({
  horizontal: {},
  vertical: {
    flexDirection: 'column',
  },
});
