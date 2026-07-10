import {style, styleVariants} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';

const semanticTag = (hue: number) => ({
  backgroundColor: `oklch(64% .12 ${hue} / .16)`,
  boxShadow: `inset 0 0 0 1px oklch(64% .12 ${hue} / .22)`,
  // eslint-disable-next-line max-len
  color: `color-mix(in oklch, oklch(48% .13 ${hue}) 72%, ${colors.foregroundBright})`,
});

export const tag = style({
  borderRadius: '0.25rem',
  flexShrink: 0,
  fontSize: '0.625rem',
  gap: '0.25rem',
  lineHeight: '0.625rem',
  padding: '0.1rem 0.25rem',
});

export const tagVariants = styleVariants({
  accent: {
    backgroundColor: colors.accent,
    color: colors.accentContrast,
  },
  default: {
    backgroundColor: colors.backgroundHover,
    color: colors.foregroundDim,
  },
  danger: semanticTag(18),
  info: semanticTag(235),
  neutral: {
    backgroundColor: `oklch(60% .02 ${colors.backgroundHue} / .16)`,
    boxShadow: `inset 0 0 0 1px oklch(60% .02 ${colors.backgroundHue} / .2)`,
    color: colors.foregroundDim,
  },
  success: semanticTag(145),
  warning: semanticTag(78),
});

export const tagIcon = style({
  height: '0.7rem',
  width: '0.7rem',
});
