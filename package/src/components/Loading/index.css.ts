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
  alignContent: 'start',
  display: 'grid',
  gap: `calc(${dimensions.padding} / 1.5)`,
  gridTemplateRows: 'auto minmax(0, 1fr)',
});

export const header = style({
  alignItems: 'center',
  color: colors.foregroundDim,
  display: 'flex',
  gap: `calc(${dimensions.padding} / 2)`,
});

export const spinner = style({
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
  animation: `${spin} .9s linear infinite`,
  border: `2px solid ${colors.backgroundHover}`,
  borderRadius: '999px',
  borderTopColor: colors.accent,
  height: dimensions.icon,
  width: dimensions.icon,
});

export const label = style({
  fontSize: '.95rem',
});

export const rows = style({
  display: 'grid',
  gap: `calc(${dimensions.padding} / 2)`,
  minHeight: 0,
  overflow: 'hidden',
  position: 'relative',
});

export const row = style({
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      selectors: {
        '&::after': {
          animation: 'none',
        },
      },
    },
  },
  background: colors.background2,
  borderRadius: dimensions.radius,
  height: '.875rem',
  overflow: 'hidden',
  position: 'relative',
  selectors: {
    '&::after': {
      animation: `${shimmer} 1.6s ease-in-out infinite`,
      background: `linear-gradient(
        90deg,
        transparent,
        ${colors.backgroundHover},
        transparent
      )`,
      content: '""',
      inset: 0,
      position: 'absolute',
    },
  },
});
