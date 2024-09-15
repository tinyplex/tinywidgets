import {useEffect} from 'react';
import {createStore} from 'tinybase';
import {createLocalPersister} from 'tinybase/persisters/persister-browser';
import {
  useCreatePersister,
  useCreateStore,
  useProvideStore,
  useSetValueCallback,
  useValue,
} from 'tinybase/ui-react';

const PREFERS_DARK = matchMedia?.('(prefers-color-scheme: dark)');

const LOCAL_STORE = 'tinywidgets/Local';
const DARK_PREFERENCE_VALUE = 'darkPreference';
const DARK_CHOICE_VALUE = 'darkChoice';

export const useDarkPreference = () =>
  useValue(DARK_PREFERENCE_VALUE, LOCAL_STORE) as boolean;

export const useDarkChoice = () =>
  (useValue(DARK_CHOICE_VALUE, LOCAL_STORE) ?? 2) as 0 | 1 | 2;
export const useToggleDarkChoiceCallback = () =>
  useSetValueCallback(
    DARK_CHOICE_VALUE,
    () => (value) => (((value ?? 2) as number) + 1) % 3,
    [],
    LOCAL_STORE,
  );

export const LocalStore = () => {
  const localStore = useCreateStore(createStore);
  useCreatePersister(
    localStore,
    (localStore) => createLocalPersister(localStore, LOCAL_STORE),
    [],
    async (persister) => {
      await persister.startAutoLoad();
      await persister.startAutoSave();
    },
  );
  useEffect(() => {
    const preferenceListener = () =>
      localStore.setValue(DARK_PREFERENCE_VALUE, PREFERS_DARK.matches);
    PREFERS_DARK.addEventListener('change', preferenceListener);
    preferenceListener();
    return () => PREFERS_DARK.removeEventListener('change', preferenceListener);
  }, [localStore]);

  useProvideStore(LOCAL_STORE, localStore);
  return null;
};