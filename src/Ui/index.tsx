/** @jsx createElement */

import type {ReactNode} from 'react';
import {Provider} from 'tinybase/ui-react';
import {createElement} from '../index.ts';
import {Layout} from './Layout/index.tsx';
import {LocalStore} from './LocalStore.tsx';
import {SessionStore} from './SessionStore.tsx';

export const Ui = (props: {
  title: ReactNode;
  topNavLeft?: ReactNode;
  topNavRight?: ReactNode;
  sideNav?: ReactNode;
  article?: ReactNode;
  footer?: ReactNode;
}) => {
  return (
    <Provider>
      <Layout {...props} />
      <SessionStore />
      <LocalStore />
    </Provider>
  );
};
