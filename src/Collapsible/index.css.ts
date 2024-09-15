import {style} from '@vanilla-extract/css';
import {borderLike} from '../common/colors.css';
import {dimensions, paddingLike, radiusLike} from '../common/dimensions.css';

export const collapsible = style([
  borderLike,
  radiusLike,
  {
    display: 'grid',
    gridTemplateRows: 'max-content minmax(0, 0fr)',
    transition: '.2s grid-template-rows ease-in-out',
    overflow: 'hidden',
    marginBottom: dimensions.padding,
    selectors: {
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
]);

export const collapsibleOpen = style({
  gridTemplateRows: 'max-content minmax(0, 1fr)',
});

export const button = style({
  margin: '-1px',
});

export const buttonOpen = style({
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

export const content = style([paddingLike, {overflow: 'hidden'}]);
