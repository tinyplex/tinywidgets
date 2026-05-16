import {style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const collapsible = style({
  alignSelf: 'start',
  border: colors.border,
  borderRadius: dimensions.radius,
  boxShadow: colors.shadow,
  display: 'grid',
  gridTemplateRows: 'max-content minmax(0, 0fr)',
  marginBottom: dimensions.padding,
  overflow: 'hidden',
  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
  transition: '.2s grid-template-rows ease-in-out',
  width: '100%',
});

export const collapsibleOpen = style({
  gridTemplateRows: 'max-content minmax(0, 1fr)',
});

export const button = style({
  boxShadow: 'none',
  margin: '-1px',
});

export const buttonOpen = style({
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

export const content = style({overflow: 'hidden', padding: dimensions.padding});
