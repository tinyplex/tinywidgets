import {style} from '@vanilla-extract/css';
import {dimensions} from '../../../../index.css';

export const article = style({
  padding: dimensions.padding,
  paddingTop: dimensions.padding,
  flex: 1,
  width: '100%',
  maxWidth: dimensions.articleWidth,
  margin: '0 auto',
});
