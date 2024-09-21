import {colors, dimensions} from 'tinywidgets/css';
import {style} from '@vanilla-extract/css';

export const exampleExec = style({
  padding: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
});

export const exampleComment = style({
  borderLeft: colors.border,
  paddingLeft: dimensions.padding,
  overflow: 'hidden',
});
