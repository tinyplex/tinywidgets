import React from 'react';
import {highlight, languages} from 'prismjs';
import {classNames} from '../utils';
import {pre} from './index.css';

export const Code = ({code, className}: {code: string; className?: string}) => (
  <pre className={classNames(pre, className)}>
    <code
      dangerouslySetInnerHTML={{
        __html: highlight(code, languages.javascript, 'javascript'),
      }}
    />
  </pre>
);
