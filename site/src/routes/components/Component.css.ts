import {dimensions} from 'tinywidgets/css';
import {style} from '@vanilla-extract/css';

export const exampleCard = style({
  display: 'flex',
  gap: dimensions.padding,
  marginBottom: dimensions.padding,
});

export const exampleExec = style({
  padding: '2rem',
  textAlign: 'center',
  width: '30%',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
});

export const exampleComment = style({
  flex: 1,
});
