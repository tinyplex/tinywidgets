/** @jsx createElement */

import React, { type ReactNode } from 'react';
import { article, footer, main } from './index.css.ts';

const {createElement} = React;

export const Main = ({
  article: articleComponents,
  footer: footerComponents,
}: {
  article: ReactNode;
  footer: ReactNode;
}) => {
  return (
    <main className={main}>
      <article className={article}>{articleComponents}</article>
      <footer className={footer}>{footerComponents}</footer>
    </main>
  );
};
