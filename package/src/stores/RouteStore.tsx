import {createCustomPersister} from 'tinybase/persisters/with-schemas';
import * as UiReact from 'tinybase/ui-react/with-schemas';
import {createStore, type Store} from 'tinybase/with-schemas';
import {READY, READY_SCHEMA} from './common';

const ROUTE_STORE = 'tinywidgets/Route';
const ROUTE_PARTS = 'routeParts';
const PARTS = 'parts';

const TABLES_SCHEMA = {
  [ROUTE_PARTS]: {[PARTS]: {type: 'string', default: ''}},
} as const;
const VALUES_SCHEMA = {
  ...READY_SCHEMA,
} as const;
type Schemas = [typeof TABLES_SCHEMA, typeof VALUES_SCHEMA];
type RouteStore = Store<Schemas>;

const {
  useCell,
  useCreateStore,
  useCreatePersister,
  useSetTablesCallback,
  useProvideStore,
  useValue,
} = UiReact as UiReact.WithSchemas<Schemas>;

const getRouteTables = (route: string) => {
  const parts = route.split('/');
  return {
    [ROUTE_PARTS]: Object.fromEntries([
      ['0', {[PARTS]: route}],
      ...parts.map((_, index) => [
        index + 1 + '',
        {[PARTS]: parts.slice(0, index + 1).join('/')},
      ]),
    ]),
  };
};

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
export const useRoute = () => useRouteParts(0).join('/');

/**
 * The useRouteParts hook returns the current route truncated to a number of
 * slash-separated parts.
 *
 * This hook will only cause a rerender when the relevant part of the route
 * changes. For example, if the route is `a/b/c/d`, then `useRouteParts(2)` will
 * return `['a', 'b']` and will only cause a rerender when the first or second
 * part of the route changes, but not when the third or fourth part changes.
 *
 * @param length The number of route parts to include. Use 0 for the full route.
 * @returns The route path, or an empty string if it does not exist.
 * @example
 * ```tsx
 * <ul>
 *   <li>{useRouteParts(1).join(' » ')}</li>
 *   <li>{useRouteParts(2).join(' » ')}</li>
 *   <li>{useRouteParts(0).join(' » ')}</li>
 * </ul>
 * ```
 */
export const useRouteParts = (length: number) =>
  useCell(ROUTE_PARTS, length + '', PARTS, ROUTE_STORE)?.split('/') ?? [];

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
  useSetTablesCallback(getRouteTables, [], ROUTE_STORE);

export const useRouteStoreIsReady = () =>
  useValue(READY, ROUTE_STORE) as boolean;

export const RouteStore = () => {
  const routeStore = useCreateStore(() =>
    createStore().setSchema(TABLES_SCHEMA, VALUES_SCHEMA),
  );
  useProvideStore(ROUTE_STORE, routeStore);

  useCreatePersister(
    routeStore,
    (routeStore) =>
      createCustomPersister(
        routeStore,
        async () => [getRouteTables(location.hash.slice(1)), {ready: true}],
        async (getContent) => {
          location.hash = getContent()[0][ROUTE_PARTS]?.['0']?.[PARTS] ?? '';
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
