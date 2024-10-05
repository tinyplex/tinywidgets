import '../pages/Installation.tsx';
import '../pages/Configuration.tsx';
import {
  COMPONENT_ROUTES,
  CSS_ROUTES,
  FUNCTION_ROUTES,
  HOOK_ROUTES,
  OBJECT_ROUTES,
} from '../pages/_api.tsx';
import {Collapsible, Hr, useRoute} from 'tinywidgets';
import React from 'react';
import {RouteButton} from './RouteLink.tsx';

type Navigation = readonly (
  | string
  | null
  | [label: string, routes: readonly string[], startOpen?: boolean]
)[];
export const NAVIGATION: Navigation = [
  'home',
  null,
  'installation',
  'configuration',
  null,
  ['Components', Object.keys(COMPONENT_ROUTES).sort(), true],
  [
    'Hooks & Functions',
    Object.keys({...HOOK_ROUTES, ...FUNCTION_ROUTES}).sort(),
  ],
  ['Objects', Object.keys({...OBJECT_ROUTES, ...CSS_ROUTES}).sort()],
];

export const SideNav = () => {
  const currentRoute = useRoute() || 'home';
  return NAVIGATION.map((routeOrRoutes, key) => {
    if (routeOrRoutes instanceof Array) {
      const [title, routes, startOpen] = routeOrRoutes;
      return (
        <Collapsible title={title} id={title} startOpen={startOpen} key={key}>
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
