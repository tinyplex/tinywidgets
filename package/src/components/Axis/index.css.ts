import {style, styleVariants} from '@vanilla-extract/css';

export const axis = style({
  display: 'flex',
  alignItems: 'center',
});

export const axisVariants = styleVariants({
  horizontal: {},
  vertical: {
    flexDirection: 'column',
  },
});
