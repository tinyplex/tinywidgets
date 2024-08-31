/** @jsx createElement */

import React, {type ReactNode} from 'react';
import {Article} from './Article/index.tsx';
import {Footer} from './Footer/index.tsx';
import {main} from './index.css.ts';

const {createElement} = React;

export const Main = ({
  article,
  footer,
}: {
  article: ReactNode;
  footer: ReactNode;
}) => {
  return (
    <main className={main}>
      <Article article={article} />
      <Footer footer={footer} />
    </main>
  );
};
