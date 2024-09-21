import {ComponentType} from 'react';
import {COMPONENT_ROUTES} from './components';

export type Routes = {
  [route: string]: [
    label: string,
    component: ComponentType,
    icon?: ComponentType,
  ];
};

export const ROUTES: Routes = {
  ...COMPONENT_ROUTES,
};
