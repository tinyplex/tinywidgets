import {style} from '@vanilla-extract/css';
import {colors} from '../css/colors.css';
import {dimensions} from '../css/dimensions.css';

export const titledContainer = style({
  alignSelf: 'start',
  border: colors.border,
  borderRadius: dimensions.radius,
  boxShadow: colors.shadow,
  display: 'grid',
  marginBottom: dimensions.padding,
  overflow: 'hidden',
  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
  width: '100%',
});

export const titledHeader = style({
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

export const titledContent = style({
  overflow: 'hidden',
  padding: dimensions.padding,
});
