import {colors} from '../../css/colors.css';
import {style} from '@vanilla-extract/css';

export const detailTable = style({
  width: '100%',
  borderCollapse: 'collapse',
  margin: '-.5rem 0',
});

export const detailRow = style({
  borderBottom: colors.border,
  selectors: {'&:last-child': {borderBottom: 'none'}},
});

export const detailCell = style({
  padding: '0.5rem 1rem',
  verticalAlign: 'top',
  selectors: {'&:is(th)': {textAlign: 'right', width: '30%'}},
});
