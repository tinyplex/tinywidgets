import {style} from '@vanilla-extract/css';
import {borderLike, paddingLike, radiusLike} from '../index.css';

export const card = style([
  borderLike,
  radiusLike,
  paddingLike,
  {height: 'fit-content'},
]);
