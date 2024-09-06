/** @jsx createElement */

import type { ReactNode } from 'react';
import { Provider } from 'tinybase/ui-react';
import { createElement } from '../index.ts';
import { LocalStore } from '../stores/LocalStore.tsx';
import { SessionStore } from '../stores/SessionStore.tsx';

export const App = ({ui, stores}: {ui: ReactNode; stores?: ReactNode}) => {
  return (
    <Provider>
      {ui}
      {stores}
      <SessionStore />
      <LocalStore />
    </Provider>
  );
};
