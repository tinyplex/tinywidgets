/** @jsx createElement */

import React, { type ReactNode } from 'react';
import { Provider } from 'tinybase/ui-react';
import { Layout } from './Layout/index.tsx';
import { Store } from './Store.tsx';

const {createElement} = React;

export const Ui = (props: {
  title: ReactNode;
  topNav: ReactNode;
  sideNav: ReactNode;
  article: ReactNode;
  footer: ReactNode;
}) => {
  return (
    <Provider>
      <Layout {...props} />
      <Store />
    </Provider>
  );
};
