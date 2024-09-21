import React from 'react';
import {Collapsible, Hr} from 'tinywidgets';
import {COMPONENT_ROUTES} from './routes/components';
import {RouteButton} from './routes/RouteLink';

type Navigation = readonly (
  | string
  | null
  | [label: string, routes: readonly string[]]
)[];
export const NAVIGATION: Navigation = [
  'home',
  null,
  ['Components', Object.keys(COMPONENT_ROUTES).sort()],
];

export const SideNav = () =>
  NAVIGATION.map((routeOrRoutes, key) => {
    if (routeOrRoutes instanceof Array) {
      const [label, routes] = routeOrRoutes;
      return (
        <Collapsible title={label} startOpen key={key}>
          {routes.map((route, key) => (
            <RouteButton route={route} key={key} />
          ))}
        </Collapsible>
      );
    } else {
      return routeOrRoutes ? (
        <RouteButton route={routeOrRoutes} key={key} />
      ) : (
        <Hr key={key} />
      );
    }
  });
