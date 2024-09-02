import {style} from '@vanilla-extract/css';
import {borderLike, dimensions, radiusLike} from '../index.css';

export const collapsible = style([
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

export const collapsibleOpen = style({gridTemplateRows: '2rem minmax(0, 1fr)'});

export const button = style({
  margin: '-1px',
});

export const buttonOpen = style({
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

export const content = style({
  padding: dimensions.padding,
  overflow: 'hidden',
});
