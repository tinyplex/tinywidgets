/** @jsx createElement */
import React from 'react';
import { createStore } from 'tinybase';
import { createLocalPersister } from 'tinybase/persisters/persister-browser';
import {
  useCreatePersister,
  useCreateStore,
  useProvideStore,
  useSetValueCallback,
  useValue,
} from 'tinybase/ui-react';

const {useEffect} = React;

const PREFERS_DARK = matchMedia('(prefers-color-scheme: dark)');

const UI_STORE = 'ui';
const DARK_PREFERENCE_VALUE = 'darkPreference';
const DARK_CHOICE_VALUE = 'darkChoice';

export const useDarkPreference = (): 0 | 1 =>
  useValue(DARK_PREFERENCE_VALUE, UI_STORE) as any;
export const useDarkChoice = (): 0 | 1 | 2 =>
  (useValue(DARK_CHOICE_VALUE, UI_STORE) ?? 0) as any;
export const useNudgeDarkChoiceCallback = () =>
  useSetValueCallback(
    DARK_CHOICE_VALUE,
    () => (value) => (((value ?? 0) as number) + 1) % 3,
    [],
    UI_STORE,
  );

export const Store = () => {
  const uiStore = useCreateStore(createStore);
  useCreatePersister(
    uiStore,
    (uiStore) => createLocalPersister(uiStore, UI_STORE),
    [],
    async (persister) => {
      await persister.startAutoLoad();
      await persister.startAutoSave();
    },
  );

  useEffect(() => {
    const preferenceListener = () =>
      uiStore.setValue(DARK_PREFERENCE_VALUE, PREFERS_DARK.matches ? 1 : 0);
    PREFERS_DARK.addEventListener('change', preferenceListener);
    return () => PREFERS_DARK.removeEventListener('change', preferenceListener);
  }, [uiStore]);

  useProvideStore(UI_STORE, uiStore);
  return null;
};
