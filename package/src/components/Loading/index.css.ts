import {keyframes, style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

const spin = keyframes({
  from: {transform: 'rotate(0deg)'},
  to: {transform: 'rotate(360deg)'},
});

const shimmer = keyframes({
  from: {transform: 'translateX(-100%)'},
  to: {transform: 'translateX(100%)'},
});

export const loading = style({
  display: 'grid',
  gridTemplateRows: 'auto minmax(0, 1fr)',
  gap: `calc(${dimensions.padding} / 1.5)`,
  alignContent: 'start',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: `calc(${dimensions.padding} / 2)`,
  color: colors.foregroundDim,
});

export const spinner = style({
  width: dimensions.icon,
  height: dimensions.icon,
  borderRadius: '999px',
  border: `2px solid ${colors.backgroundHover}`,
  borderTopColor: colors.accent,
  animation: `${spin} .9s linear infinite`,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
});

export const label = style({
  fontSize: '.95rem',
});

export const rows = style({
  position: 'relative',
  display: 'grid',
  gap: `calc(${dimensions.padding} / 2)`,
  minHeight: 0,
  overflow: 'hidden',
});

export const row = style({
  position: 'relative',
  overflow: 'hidden',
  height: '.875rem',
  borderRadius: dimensions.radius,
  background: colors.background2,
  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(
        90deg,
        transparent,
        ${colors.backgroundHover},
        transparent
      )`,
      animation: `${shimmer} 1.6s ease-in-out infinite`,
    },
  },
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      selectors: {
        '&::after': {
          animation: 'none',
        },
      },
    },
  },
});
