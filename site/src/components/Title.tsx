import {ReactNode} from 'react';
import {Axis} from 'tinywidgets';
import {title} from './Title.css';

export const Title = ({children}: {readonly children: ReactNode}) => (
  <Axis as="h1" className={title}>
    {children}
  </Axis>
);
