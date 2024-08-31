/** @jsx createElement */

import React, { type ReactNode } from 'react';
import { Provider } from 'tinybase/ui-react';
import { Store } from '../Store.tsx';
import { Layout } from './Layout/index.tsx';

const {createElement} = React;

export const Ui = (props: {
  title: ReactNode;
  topBar: ReactNode;
  sideBar: ReactNode;
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
