import {globalStyle, style} from '@vanilla-extract/css';
import {colors} from '../../css/colors.css';

export const table = style({
  borderCollapse: 'collapse',
  height: '100%',
  padding: 0,
  tableLayout: 'fixed',
  width: '100%',
});

globalStyle(`${table} th, ${table} td`, {
  borderColor: colors.borderColor,
  borderStyle: 'solid',
  borderWidth: '1px 0',
  overflow: 'hidden',
  padding: '0.25rem 1rem',
  textAlign: 'left',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

globalStyle(`${table} th`, {
  backgroundColor: colors.backgroundHover,
  fontWeight: 'inherit',
});
