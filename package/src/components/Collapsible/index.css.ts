import {style} from '@vanilla-extract/css';
import {
  titledContainer,
  titledContent,
  titledHeader,
} from '../../common/titledContainer.css';

export const collapsible = style([
  titledContainer,
  {
    gridTemplateRows: 'max-content minmax(0, 0fr)',
    transition: '.2s grid-template-rows ease-in-out',
  },
]);

export const collapsibleOpen = style({
  gridTemplateRows: 'max-content minmax(0, 1fr)',
});

export const button = style({
  boxShadow: 'none',
  margin: '-1px',
});

export const buttonOpen = style([titledHeader]);

export const content = style([titledContent]);
