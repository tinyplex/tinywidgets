import {style} from '@vanilla-extract/css';
import {background, padding1} from '../../../../index.css';

export const article = style([
  padding1,
  background,
  {
    flex: 1,
    width: '100%',
    maxWidth: '80rem',
    margin: '0 auto',
    backgroundColor: 'red',
  },
]);
