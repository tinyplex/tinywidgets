import {style} from '@vanilla-extract/css';
import {dimensions, paddingLike} from '../../../../index.css';

export const article = style([
  paddingLike,
  {
    paddingTop: dimensions.padding,
    flex: 1,
    width: '100%',
    // maxWidth: dimensions.articleWidth,
    margin: '0 auto',
  },
]);
