import {Button, useSetRouteCallback} from '../../../package/src';
import React, {ComponentProps, useCallback} from 'react';
import {ROUTES} from '../pages';

export const RouteButton = ({
  route,
  variant = 'item',
  current,
  className,
}: {
  readonly route: string;
  readonly variant?: ComponentProps<typeof Button>['variant'];
  readonly current?: boolean;
  readonly className?: string;
}) => {
  const setRoute = useSetRouteCallback();
  const onClick = useCallback(() => setRoute(route), [setRoute, route]);

  return (
    <Button
      variant={variant}
      title={ROUTES[route]?.[0]}
      icon={ROUTES[route]?.[2]}
      onClick={onClick}
      className={className}
      current={current}
    />
  );
};
