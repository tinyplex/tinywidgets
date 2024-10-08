import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';
import {style} from '@vanilla-extract/css';

export const collapsible = style({
  width: '100%',
  alignSelf: 'start',
  borderRadius: dimensions.radius,
  boxShadow: colors.shadow,
  border: colors.border,
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
});

export const collapsibleOpen = style({
  gridTemplateRows: 'max-content minmax(0, 1fr)',
});

export const button = style({
  margin: '-1px',
  boxShadow: 'none',
});

export const buttonOpen = style({
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

export const content = style({padding: dimensions.padding, overflow: 'hidden'});
