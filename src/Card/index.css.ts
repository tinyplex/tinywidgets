import {style} from '@vanilla-extract/css';
import {borderLike} from '../common/colors.css';
import {paddingLike, radiusLike} from '../common/dimensions.css';

export const card = style([
  borderLike,
  radiusLike,
  paddingLike,
  {height: 'fit-content'},
]);
