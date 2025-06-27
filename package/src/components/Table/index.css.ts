import {globalStyle, style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';

export const table = style({
  width: '100%',
  height: '100%',
  padding: 0,
  borderCollapse: 'collapse',
  tableLayout: 'fixed',
});

globalStyle(`${table} th, ${table} td`, {
  overflow: 'hidden',
  padding: '0.25rem 1rem',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  borderWidth: '1px 0',
  borderStyle: 'solid',
  borderColor: colors.borderColor,
  textAlign: 'left',
});

globalStyle(`${table} th`, {
  fontWeight: 'inherit',
  backgroundColor: colors.backgroundHover,
});
