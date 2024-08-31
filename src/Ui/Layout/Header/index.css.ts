import {style} from '@vanilla-extract/css';
import {dimensions, theme} from '../../../index.css';

export const header = style([
  {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: dimensions.padding,
    boxShadow: theme.shadow,
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
