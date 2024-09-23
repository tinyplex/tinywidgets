import {ComponentType} from 'react';

export type Routes = {
  [route: string]: [
    label: string,
    component: ComponentType,
    icon?: ComponentType,
  ];
};

export const ROUTES: Routes = {};
