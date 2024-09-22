import React, {ComponentProps} from 'react';
import {Button, useSetRouteCallback} from 'tinywidgets';
import {ROUTES} from './';

export const RouteButton = ({
  route,
  variant = 'item',
  current,
  className,
}: {
  route: string;
  variant?: ComponentProps<typeof Button>['variant'];
  current?: boolean;
  className?: string;
}) => {
  const setRoute = useSetRouteCallback();
  return (
    <Button
      variant={variant}
      title={ROUTES[route]?.[0]}
      icon={ROUTES[route]?.[2]}
      onClick={() => setRoute(route)}
      className={className}
      current={current}
    />
  );
};
