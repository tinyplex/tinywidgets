import {style} from '@vanilla-extract/css';
import {
  displayFlexRow,
  justify,
  padding1,
  positionFixed,
  shadow,
} from '../../../atoms.css.ts';
import {dimensions, theme} from '../../../index.css';

export const header = style([
  positionFixed,
  displayFlexRow,
  justify,
  padding1,
  shadow,
  {
    backdropFilter: 'blur(8px)',
    backgroundColor: theme.backgroundHaze,
    left: 0,
    right: 0,
    gap: '1rem',
    height: dimensions.topNavHeight,
    borderBottom: `1px solid ${theme.border}`,
    zIndex: 1,
  },
]);
