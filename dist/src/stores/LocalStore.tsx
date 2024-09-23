import {useEffect} from 'react';
import {createLocalPersister} from 'tinybase/persisters/persister-browser/with-schemas';
import * as UiReact from 'tinybase/ui-react/with-schemas';
import {createStore, type NoTablesSchema} from 'tinybase/with-schemas';
import {CHANGE, READY, READY_SCHEMA} from './common';

const PREFERS_DARK = matchMedia?.('(prefers-color-scheme: dark)');

const LOCAL_STORE = 'tinywidgets/Local';
const DARK_PREFERENCE = 'darkPreference';
const DARK_CHOICE = 'darkChoice';

const VALUES_SCHEMA = {
  ...READY_SCHEMA,
  [DARK_PREFERENCE]: {type: 'boolean', default: false},
  [DARK_CHOICE]: {type: 'number', default: 2},
} as const;
type Schemas = [NoTablesSchema, typeof VALUES_SCHEMA];

const {
  useCreatePersister,
  useCreateStore,
  useProvideStore,
  useSetValueCallback,
  useValue,
} = UiReact as UiReact.WithSchemas<Schemas>;

/**
 * The useDark hook returns whether the user is viewing the application in dark
 * mode.
 *
 * @returns A boolean where `true` means 'dark' and `false` means 'light' mode.
 * @example
 * ```tsx
 * <Card>
 *   Currently in {useDark() ? 'dark' : 'light'} mode
 * </Card>
 * ```
 * This example shows the hook returning the current mode.
 */
export const useDark = () => {
  const darkChoice = useDarkChoice();
  const darkPreference = useValue(DARK_PREFERENCE, LOCAL_STORE);
  return darkChoice == 1 || (darkChoice == 2 && darkPreference);
};

export const useDarkChoice = () =>
  (useValue(DARK_CHOICE, LOCAL_STORE) ?? 2) as 0 | 1 | 2;

export const useToggleDarkChoiceCallback = () =>
  useSetValueCallback(
    DARK_CHOICE,
    () => (value) => (((value ?? 2) as number) + 1) % 3,
    [],
    LOCAL_STORE,
  );

export const useLocalStoreIsReady = () =>
  useValue(READY, LOCAL_STORE) as boolean;

export const LocalStore = () => {
  const localStore = useCreateStore(() =>
    createStore().setValuesSchema(VALUES_SCHEMA),
  );
  useCreatePersister(
    localStore,
    (localStore) => createLocalPersister(localStore, LOCAL_STORE),
    [],
    async (persister) => {
      await persister.startAutoLoad();
      await persister.startAutoSave();
      persister.getStore().setValue(READY, true);
    },
  );
  useEffect(() => {
    const preferenceListener = () =>
      localStore.setValue(DARK_PREFERENCE, PREFERS_DARK.matches);
    PREFERS_DARK.addEventListener(CHANGE, preferenceListener);
    preferenceListener();
    return () => PREFERS_DARK.removeEventListener(CHANGE, preferenceListener);
  }, [localStore]);

  useProvideStore(LOCAL_STORE, localStore);
  return null;
};
