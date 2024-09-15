import './common/global.css.ts';

export const classNames = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(' ');
