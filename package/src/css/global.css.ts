import {globalStyle} from '@vanilla-extract/css';
import {small} from '../common/functions';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  color: 'inherit',
  fontSize: 'inherit',
  ...small({fontSize: '0.85rem'}),
});
