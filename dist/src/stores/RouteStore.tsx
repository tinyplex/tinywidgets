import {createCustomPersister} from 'tinybase/persisters/with-schemas';
import * as UiReact from 'tinybase/ui-react/with-schemas';
import {createStore, type NoTablesSchema} from 'tinybase/with-schemas';
import {READY, READY_SCHEMA} from './common';

const ROUTE_STORE = 'tinywidgets/Route';
const ROUTE = 'route';

const VALUES_SCHEMA = {
  ...READY_SCHEMA,
  [ROUTE]: {type: 'string', default: ''},
} as const;
type Schemas = [NoTablesSchema, typeof VALUES_SCHEMA];

const {
  useCreateStore,
  useProvideStore,
  useCreatePersister,
  useValue,
  useSetValueCallback,
} = UiReact as UiReact.WithSchemas<Schemas>;

/**
 * The useRoute hook returns the current route, assuming the app is using the
 * basic TinyWidgets routing system.
 *
 * This 'system' simply involves using this hook to get a string which may have
 * been persisted to the hash part of the browser's URL.
 * @returns The current route.
 * @example
 * ```tsx
 * <Card>
 *   Current route
 *   <Hr />
 *   <code>{useRoute()}</code>
 * </Card>
 * ```
 * This example shows the hook returning the current route.
 */
export const useRoute = () => useValue(ROUTE, ROUTE_STORE);

/**
 * The useSetRouteCallback hook a callback for setting the current route,
 * assuming the app is using the basic TinyWidgets routing system.
 *
 * This 'system' simply involves using this hook to set a string to be persisted
 * to the hash part of the browser's URL.
 * @returns The current route.
 * @example
 * ```tsx
 * const setRoute = useSetRouteCallback();
 * // ...
 * <Button
 *   icon={Lucide.Home}
 *   title="Home"
 *   onClick={() => setRoute('home')}
 * />
 * ```
 * This example shows the hook returning a callback that will change the current
 * route when called as a click handler.
 */
export const useSetRouteCallback = () =>
  useSetValueCallback(ROUTE, (route: string) => route, [], ROUTE_STORE);

export const useRouteStoreIsReady = () =>
  useValue(READY, ROUTE_STORE) as boolean;

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
        async () => [{}, {route: location.hash.slice(1), ready: true}],
        async (getContent) => {
          const route = getContent()[1].route;
          if (route) {
            location.hash = route;
          }
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
      persister.getStore().setValue(READY, true);
    },
  );

  return null;
};
