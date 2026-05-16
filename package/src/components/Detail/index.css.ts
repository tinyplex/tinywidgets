import {style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';

export const detailTable = style({
  borderCollapse: 'collapse',
  margin: '-.5rem 0',
  width: '100%',
});

export const detailRow = style({
  borderBottom: colors.border,
  selectors: {'&:last-child': {borderBottom: 'none'}},
});

export const detailCell = style({
  padding: '0.5rem 1rem',
  selectors: {'&:is(th)': {textAlign: 'right', width: '30%'}},
  verticalAlign: 'top',
});
