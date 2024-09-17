import {style} from '@vanilla-extract/css';
import {colors} from '../common/colors.css';
import {dimensions} from '../common/dimensions.css';

export const pre = style([
  {
    padding: dimensions.padding,
    borderRadius: dimensions.radius,
    boxShadow: colors.shadow,
    border: colors.border,
    lineHeight: '1.25rem',
  },
]);

// pre {
//   --mono-1: hsl(220, 14%, 71%);
//   --mono-3: hsl(220, 10%, 40%);
//   --hue-1: hsl(187, 47%, 55%);
//   --hue-2: hsl(207, 82%, 66%);
//   --hue-3: hsl(286, 60%, 67%);
//   --hue-4: hsl(95, 38%, 62%);
//   --hue-5: hsl(355, 65%, 65%);
//   --hue-5-2: hsl(5, 48%, 51%);
//   --hue-6: hsl(29, 54%, 61%);

//   display: block;
//   margin: 2rem 0;
//   overflow-x: auto;
//   padding: 1rem;

//   .doctype,
//   .punctuation,
//   .entity {
//     color: var(--mono-1);
//   }

//   .comment,
//   .prolog,
//   .cdata {
//     color: var(--mono-3);
//     font-style: italic;
//   }

//   .attr-name,
//   .boolean,
//   .constant,
//   .number,
//   .atrule {
//     color: var(--hue-6);
//   }

//   .operator,
//   .keyword {
//     color: var(--hue-3);
//   }

//   .literal-property,
//   .property,
//   .tag,
//   .symbol,
//   .deleted,
//   .important {
//     color: var(--hue-5);
//   }

//   .selector,
//   .string,
//   .char,
//   .builtin,
//   .inserted,
//   .regex,
//   .attr-value,
//   .attr-value > .punctuation {
//     color: var(--hue-4);
//   }

//   .variable {
//     color: var(--hue-2);
//   }

//   .url {
//     color: var(--hue-1);
//   }

//   .function,
//   .class-name {
//     color: var(--hue-1);
//   }
// }
