import {ComponentType} from 'react';
import {COMPONENT_ROUTES} from './components';
import {Home} from './Home';

export type Routes = {
  [route: string]: [label: string, component: ComponentType];
};

export const ROUTES: Routes = {
  home: ['Home', Home],
  ...COMPONENT_ROUTES,
};
