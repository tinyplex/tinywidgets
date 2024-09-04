/** @jsx createElement */

import type {ReactNode} from 'react';
import {classNames, createElement} from '../../../index.ts';
import {Article} from './Article/index.tsx';
import {Footer} from './Footer/index.tsx';
import {main, mainHasSideNav} from './index.css.ts';

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
    <main className={classNames(main, hasSideNav && mainHasSideNav)}>
      {article ? <Article article={article} /> : null}
      {footer ? <Footer footer={footer} /> : null}
    </main>
  );
};
