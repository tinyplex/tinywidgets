import {style, styleVariants} from '@vanilla-extract/css';
import {
  titledContainer,
  titledContent,
  titledHeader,
} from '../../common/titledContainer.css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const card = style({
  border: colors.border,
  borderRadius: dimensions.radius,
  boxShadow: colors.shadow,
  height: 'fit-content',
  overflow: 'auto',
  padding: dimensions.padding,
});

export const titledCard = style([titledContainer]);

const titleButtonBase = style([
  titledHeader,
  {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.backgroundHover,
    border: colors.border,
    borderRadius: dimensions.radius,
    boxShadow: 'none',
    color: colors.foregroundBright,
    display: 'inline-flex',
    flexShrink: 0,
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    gap: dimensions.padding,
    justifyContent: 'space-between',
    lineHeight: 'normal',
    margin: '-1px',
    outlineOffset: '-2px',
    overflow: 'hidden',
    padding: '0.5rem 1rem',
    textAlign: 'left',
    transition: 'background-color 0.1s,border-color 0.1s',
    whiteSpace: 'nowrap',
  },
]);

export const titleButton = styleVariants({
  closable: [
    titleButtonBase,
    {
      cursor: 'pointer',
      selectors: {
        '&:hover': {
          backgroundColor: colors.backgroundHover,
          color: colors.foregroundBright,
        },
      },
    },
  ],
  static: [titleButtonBase],
});

export const title = style({
  flex: '1 1 auto',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const titleRight = style({
  flex: '0 0 auto',
  overflow: 'hidden',
});

export const titledCardContent = style([titledContent]);
