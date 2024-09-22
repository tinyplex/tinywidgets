import type {StyleRule} from '@vanilla-extract/css';

export const LARGE_BREAK = 768;
export const SMALL_BREAK = 448;

export const large = (style: StyleRule) => ({
  '@media': {[`screen and (min-width: ${LARGE_BREAK}px)`]: style},
});

export const notLarge = (style: StyleRule) => ({
  '@media': {[`screen and (max-width: ${LARGE_BREAK}px)`]: style},
});

export const small = (style: StyleRule) => ({
  '@media': {[`screen and (min-width: ${SMALL_BREAK}px)`]: style},
});

export const notSmall = (style: StyleRule) => ({
  '@media': {[`screen and (max-width: ${SMALL_BREAK}px)`]: style},
});
