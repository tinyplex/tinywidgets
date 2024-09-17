import React from 'react';
import {Button, Collapsible, Hr} from 'tinywidgets';
import {useSetRouteCallback} from '../../dist/src/utils';
import {ROUTES} from './routes';
import {COMPONENT_ROUTES} from './routes/components';

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

const Link = ({route}: {route: string}) => {
  const setRoute = useSetRouteCallback();
  return (
    <Button
      variant="item"
      label={ROUTES[route]?.[0]}
      onClick={() => setRoute(route)}
    />
  );
};

export const SideNav = () =>
  NAVIGATION.map((routeOrRoutes, key) => {
    if (routeOrRoutes instanceof Array) {
      const [label, routes] = routeOrRoutes;
      return (
        <Collapsible label={label} startOpen key={key}>
          {routes.map((route, key) => (
            <Link route={route} key={key} />
          ))}
        </Collapsible>
      );
    } else {
      return routeOrRoutes ? (
        <Link route={routeOrRoutes} key={key} />
      ) : (
        <Hr key={key} />
      );
    }
  });
