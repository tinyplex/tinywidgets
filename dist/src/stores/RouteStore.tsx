import {createCustomPersister} from 'tinybase/persisters/with-schemas';
import * as UiReact from 'tinybase/ui-react/with-schemas';
import {createStore, type NoTablesSchema} from 'tinybase/with-schemas';

const ROUTE_STORE = 'tinywidgets/Route';
const VALUES_SCHEMA = {route: {type: 'string', default: ''}} as const;
type Schemas = [NoTablesSchema, typeof VALUES_SCHEMA];
const {
  useCreateStore,
  useProvideStore,
  useCreatePersister,
  useValue,
  useSetValueCallback,
} = UiReact as UiReact.WithSchemas<Schemas>;

export const useRoute = () => useValue('route', ROUTE_STORE);

export const useSetRouteCallback = () =>
  useSetValueCallback('route', (route: string) => route, [], ROUTE_STORE);

export const RouteStore = () => {
  const routeStore = useCreateStore(() =>
    createStore().setValuesSchema(VALUES_SCHEMA),
  );
  useProvideStore(ROUTE_STORE, routeStore);

  useCreatePersister(
    routeStore,
    (routeStore) =>
      createCustomPersister(
        routeStore,
        async () => [{}, {route: location.hash.slice(1) ?? ''}],
        async (getContent) => {
          location.hash = getContent()[1].route;
        },
        (listener) => {
          const hashListener = () => listener();
          window.addEventListener('hashchange', hashListener);
          return hashListener;
        },
        (hashListener) =>
          window.removeEventListener('hashchange', hashListener),
      ),
    [],
    async (persister) => {
      await persister.startAutoLoad();
      await persister.startAutoSave();
    },
  );

  return null;
};
