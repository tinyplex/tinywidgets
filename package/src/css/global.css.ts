import {globalStyle} from '@vanilla-extract/css';
import {small} from '../common/functions';

globalStyle('*', {
  boxSizing: 'border-box',
  color: 'inherit',
  fontSize: 'inherit',
  margin: 0,
  padding: 0,
  ...small({fontSize: '0.9rem'}),
});
