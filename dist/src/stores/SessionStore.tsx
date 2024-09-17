import {createStore, type Id} from 'tinybase';
import {createSessionPersister} from 'tinybase/persisters/persister-browser';
import {
  useCell,
  useCreatePersister,
  useCreateStore,
  useProvideStore,
  useSetCellCallback,
  useSetValueCallback,
  useValue,
} from 'tinybase/ui-react';

const SESSION_STORE = 'tinywidgets/Session';

const COLLAPSIBLE_TABLE = 'collapsible';
const COLLAPSIBLE_IS_OPEN_CELL = 'isOpen';

const SIDE_NAV_IS_OPEN_VALUE = 'sideNavIsOpen';

export const useCollapsibleIsOpen = (collapsibleId: Id) =>
  useCell(
    COLLAPSIBLE_TABLE,
    collapsibleId,
    COLLAPSIBLE_IS_OPEN_CELL,
    SESSION_STORE,
  ) as any;

export const useSetCollapsibleIsOpenCallback = (collapsibleId: Id) =>
  useSetCellCallback(
    COLLAPSIBLE_TABLE,
    collapsibleId,
    COLLAPSIBLE_IS_OPEN_CELL,
    (open: boolean) => open,
    [collapsibleId],
    SESSION_STORE,
  );

export const useSideNavIsOpen = () =>
  useValue(SIDE_NAV_IS_OPEN_VALUE, SESSION_STORE) as any;

export const useToggleSideNavIsOpenCallback = () =>
  useSetValueCallback(
    SIDE_NAV_IS_OPEN_VALUE,
    () => (value) => !value,
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
