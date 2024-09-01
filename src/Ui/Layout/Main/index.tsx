/** @jsx createElement */

import React, {type ReactNode} from 'react';
import {Article} from './Article/index.tsx';
import {Footer} from './Footer/index.tsx';
import {main} from './index.css.ts';

const {createElement} = React;

export const Main = ({
  article,
  footer,
  hasSideNav,
}: {
  article?: ReactNode;
  footer?: ReactNode;
  hasSideNav: boolean;
}) => {
  return (
    <main className={main[hasSideNav ? 1 : 0]}>
      {article ? <Article article={article} /> : null}
      {footer ? <Footer footer={footer} /> : null}
    </main>
  );
};
