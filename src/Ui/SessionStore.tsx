import {createStore} from 'tinybase';
import {createSessionPersister} from 'tinybase/persisters/persister-browser';
import {
  useCreatePersister,
  useCreateStore,
  useProvideStore,
  useSetValueCallback,
  useValue,
} from 'tinybase/ui-react';

const SESSION_STORE = 'uiSession';
const SIDE_NAV_VALUE = 'sideNav';

export const useSideNav = () => useValue(SIDE_NAV_VALUE, SESSION_STORE) as any;
export const useSetSideNav = () =>
  useSetValueCallback(
    SIDE_NAV_VALUE,
    (event: any) => event.target.checked,
    [],
    SESSION_STORE,
  );

export const SessionStore = () => {
  const sessionStore = useCreateStore(createStore);
  useCreatePersister(
    sessionStore,
    (sessionStore) => createSessionPersister(sessionStore, SESSION_STORE),
    [],
    async (persister) => {
      await persister.startAutoLoad();
      await persister.startAutoSave();
    },
  );
  useProvideStore(SESSION_STORE, sessionStore);
  return null;
};
