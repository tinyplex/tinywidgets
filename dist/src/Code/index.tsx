import 'prismjs';
import 'prismjs/components/prism-jsx';
import React from 'react';
import Prism from 'prismjs';
import {classNames} from '../utils';
import {pre} from './index.css';

const {highlight, languages} = Prism;

export const Code = ({
  code,
  language = 'jsx',
  className,
}: {
  code: string;
  language?: string;
  className?: string;
}) => {
  return (
    <pre className={classNames(pre, className)}>
      <code
        dangerouslySetInnerHTML={{
          __html: highlight(code, languages[language], language),
        }}
      />
    </pre>
  );
};
