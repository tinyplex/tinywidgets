import React from 'react';
import {Collapsible, Hr, useRoute} from 'tinywidgets';
import {COMPONENT_ROUTES, HOOK_ROUTES} from './pages/_api.tsx';
import {RouteButton} from './pages/RouteLink';

type Navigation = readonly (
  | string
  | null
  | [label: string, routes: readonly string[]]
)[];
export const NAVIGATION: Navigation = [
  'home',
  null,
  ['Components', Object.keys(COMPONENT_ROUTES).sort()],
  ['Hooks', Object.keys(HOOK_ROUTES).sort()],
];

export const SideNav = () => {
  const currentRoute = useRoute() || 'home';
  return NAVIGATION.map((routeOrRoutes, key) => {
    if (routeOrRoutes instanceof Array) {
      const [label, routes] = routeOrRoutes;
      return (
        <Collapsible title={label} startOpen key={key}>
          {routes.map((route, key) => (
            <RouteButton
              route={route}
              current={currentRoute === route}
              key={key}
            />
          ))}
        </Collapsible>
      );
    } else {
      return routeOrRoutes ? (
        <RouteButton
          route={routeOrRoutes}
          current={currentRoute === routeOrRoutes}
          key={key}
        />
      ) : (
        <Hr key={key} />
      );
    }
  });
};
