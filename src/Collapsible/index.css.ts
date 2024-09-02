import {style, styleVariants} from '@vanilla-extract/css';
import {borderLike, dimensions, radiusLike} from '../index.css';

const collapsibleBase = style([
  borderLike,
  radiusLike,
  {
    display: 'grid',
    gridTemplateRows: '2rem minmax(0, 0fr)',
    transition: '.2s grid-template-rows ease-in-out',
    overflow: 'hidden',
    marginBottom: dimensions.padding,
  },
]);

export const collapsible = styleVariants({
  0: [collapsibleBase],
  1: [collapsibleBase, {gridTemplateRows: '2rem minmax(0, 1fr)'}],
});

export const button = style({
  margin: '-1px',
  zIndex: 100,
});

export const content = style({
  padding: dimensions.padding,
  overflow: 'hidden',
});
