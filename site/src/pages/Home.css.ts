import {style} from '@vanilla-extract/css';
import {colors, screens} from 'tinywidgets/source/css';

export const home = style({
  textAlign: 'center',
});

export const title = style({
  color: colors.foregroundBright,
  fontSize: '2.4rem',
  '@media': {
    [`screen and (min-width: ${screens.large}px)`]: {fontSize: '3.2rem'},
  },
});

export const narrower = style({
  maxWidth: '40rem',
  margin: 'auto',
});

export const button = style({
  margin: '0.25rem',
});

export const logo = style({
  width: '4rem',
  height: '4rem',
});

export const hr = style({
  margin: '2rem 0',
});
