import React, {ComponentProps} from 'react';
import {Button} from 'tinywidgets';
import {useSetRouteCallback} from 'tinywidgets/utils';
import {ROUTES} from './';

export const RouteButton = ({
  route,
  variant = 'item',
  className,
}: {
  route: string;
  variant?: ComponentProps<typeof Button>['variant'];
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
    />
  );
};
