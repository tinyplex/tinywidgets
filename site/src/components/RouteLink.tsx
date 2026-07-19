import {ComponentProps, useCallback} from 'react';
import {Button, useSetRouteCallback} from 'tinywidgets/source';
import {ROUTES} from '../pages';

export const RouteButton = ({
  title,
  route,
  variant = 'item',
  current,
  className,
}: {
  readonly title?: string;
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
      title={title ?? ROUTES[route]?.[0]}
      icon={ROUTES[route]?.[2]}
      onClick={onClick}
      className={className}
      current={current}
    />
  );
};
