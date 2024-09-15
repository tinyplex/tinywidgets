import type {StyleRule} from '@vanilla-extract/css';

const LARGE = 'screen and (min-width: 768px)';
const SMALL = 'screen and (max-width: 450px)';

export const large = (style: StyleRule) => ({
  '@media': {[LARGE]: style},
});

export const small = (style: StyleRule) => ({
  '@media': {[SMALL]: style},
});
