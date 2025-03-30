import {small} from '../common/functions';
import {globalStyle} from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  color: 'inherit',
  fontSize: 'inherit',
  ...small({fontSize: '0.9rem'}),
});
