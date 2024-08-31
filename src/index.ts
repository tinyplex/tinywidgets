import type {StyleRule} from '@vanilla-extract/css';

const LARGE = 'screen and (min-width: 1000px)';

export const large = (style: StyleRule) => ({
  '@media': {
    [LARGE]: style,
  },
});

export const squareButton = {
  width: '2rem',
  minWidth: '2rem',
  height: '2rem',
  minHeight: '2rem',
};

export const dimensions = {
  sideNavWidth: '20rem',
  topNavHeight: '4rem',
  articleWidth: '60rem',
};
