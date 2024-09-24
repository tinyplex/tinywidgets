import {globalStyle, style} from '@vanilla-extract/css';
import {code} from '../../css/code.css';
import {colors} from '../../css/colors.css';
import {dimensions} from '../../css/dimensions.css';

export const pre = style({
  padding: dimensions.padding,
  borderRadius: dimensions.radius,
  background: colors.background2,
  border: colors.border,
  lineHeight: '1.25rem',
  overflowX: 'auto',
});

globalStyle('.token.comment, .token.prolog, .token.cdata', {
  color: code['mono-3'],
});

globalStyle('.token.doctype, .token.punctuation, .token.entity', {
  color: code['mono-1'],
});

globalStyle(
  '.token.attr-name, .token.class-name, .token.boolean, .token.constant, .token.number, .token.atrule',
  {color: code['hue-6']},
);

globalStyle('.token.keyword', {color: code['hue-3']});

globalStyle(
  '.token.property, .token.tag, .token.symbol, .token.deleted, .token.important',
  {color: code['hue-5']},
);

globalStyle(
  '.token.selector, .token.string, .token.char, .token.builtin, .token.inserted, .token.regex, .token.attr-value, .token.attr-value > .token.punctuation',
  {color: code['hue-4']},
);

globalStyle('.token.variable, .token.operator, .token.function', {
  color: code['hue-2'],
});

globalStyle('.token.url', {
  color: code['hue-1'],
});
