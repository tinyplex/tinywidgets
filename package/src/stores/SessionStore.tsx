import {createSessionPersister} from 'tinybase/persisters/persister-browser/with-schemas';
import * as UiReact from 'tinybase/ui-react/with-schemas';
import {createStore} from 'tinybase/with-schemas';
import {READY, READY_SCHEMA} from './common';

const SESSION_STORE = 'tinywidgets/Session';
const COLLAPSIBLE = 'collapsible';
const IS_OPEN = 'isOpen';
const SIDE_NAV_IS_OPEN = 'sideNavIsOpen';

const TABLES_SCHEMA = {
  [COLLAPSIBLE]: {
    [IS_OPEN]: {type: 'boolean', default: false},
  },
} as const;
const VALUES_SCHEMA = {
  ...READY_SCHEMA,
  [SIDE_NAV_IS_OPEN]: {type: 'boolean', default: false},
} as const;
type Schemas = [typeof TABLES_SCHEMA, typeof VALUES_SCHEMA];

const {
  useCell,
  useCreatePersister,
  useCreateStore,
  useProvideStore,
  useSetCellCallback,
  useSetValueCallback,
  useValue,
} = UiReact as UiReact.WithSchemas<Schemas>;

export const useCollapsibleIsOpen = (collapsibleId: string) =>
  useCell(COLLAPSIBLE, collapsibleId, IS_OPEN, SESSION_STORE) as any;

export const useSetCollapsibleIsOpenCallback = (collapsibleId: string) =>
  useSetCellCallback(
    COLLAPSIBLE,
    collapsibleId,
    IS_OPEN,
    (open: boolean) => open,
    [collapsibleId],
    SESSION_STORE,
  );

export const useSideNavIsOpen = () =>
  useValue(SIDE_NAV_IS_OPEN, SESSION_STORE) as any;

export const useToggleSideNavIsOpenCallback = () =>
  useSetValueCallback(
    SIDE_NAV_IS_OPEN,
    () => (value) => !value,
    [],
    SESSION_STORE,
  );

export const useSessionStoreIsReady = () =>
  useValue(READY, SESSION_STORE) as boolean;

export const SessionStore = () => {
  const sessionStore = useCreateStore(() =>
    createStore().setSchema(TABLES_SCHEMA, VALUES_SCHEMA),
  );
  useCreatePersister(
    sessionStore,
    (sessionStore) => createSessionPersister(sessionStore, SESSION_STORE),
    [],
    async (persister) => {
      await persister.startAutoLoad();
      await persister.startAutoSave();
      persister.getStore().setValue(READY, true);
    },
  );
  useProvideStore(SESSION_STORE, sessionStore);
  return null;
};
