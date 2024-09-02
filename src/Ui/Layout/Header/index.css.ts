import {style} from '@vanilla-extract/css';
import {axisLike, dimensions, paddingLike, theme} from '../../../index.css';

export const header = style([
  paddingLike,
  axisLike,
  {
    position: 'fixed',
    boxShadow: theme.shadow,
    backdropFilter: 'blur(8px)',
    backgroundColor: theme.backgroundHaze,
    left: 0,
    right: 0,
    height: dimensions.topNavHeight,
    borderBottom: `1px solid ${theme.border}`,
    zIndex: 2,
  },
]);
