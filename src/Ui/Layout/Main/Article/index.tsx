/** @jsx createElement */

import React, {type ReactNode} from 'react';
import {article} from './index.css.ts';

const {createElement} = React;

export const Article = ({article: articleComponents}: {article: ReactNode}) => {
  return <article className={article}>{articleComponents}</article>;
};
