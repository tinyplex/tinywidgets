import {title} from './Title.css';
import React, {ReactNode} from 'react';

export const Title = ({children}: {readonly children: ReactNode}) => (
  <h1 className={title}>{children}</h1>
);
