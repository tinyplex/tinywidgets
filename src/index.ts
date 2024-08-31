import type {StyleRule} from '@vanilla-extract/css';

const LARGE = 'screen and (min-width: 1000px)';

export const large = (style: StyleRule) => ({
  '@media': {
    [LARGE]: style,
  },
});
