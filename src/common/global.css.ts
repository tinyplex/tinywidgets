import {globalStyle} from '@vanilla-extract/css';
import {small} from './media';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  scrollbarWidth: 'thin',
  color: 'inherit',
  fontSize: 'inherit',
});

globalStyle('html', {
  fontFamily: 'tinyWidgets-main',
  fontSize: '14px',
  lineHeight: '1.5em',
  textRendering: 'optimizeLegibility',
  fontWeight: 400,
  ...small({
    fontSize: '12px',
  }),
});

globalStyle('h1', {fontSize: '1.5rem'});

globalStyle('h2', {fontSize: '1.25rem'});
