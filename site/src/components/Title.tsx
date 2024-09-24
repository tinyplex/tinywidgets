import React, {ReactNode} from 'react';
import {title} from './Title.css';

export const Title = ({children}: {readonly children: ReactNode}) => (
  <h1 className={title}>{children}</h1>
);
