/** @jsx createElement */

import type {ReactNode} from 'react';
import {createElement} from '../../../../index.ts';
import {article} from './index.css.ts';

export const Article = ({article: articleComponents}: {article: ReactNode}) => {
  return <article className={article}>{articleComponents}</article>;
};
