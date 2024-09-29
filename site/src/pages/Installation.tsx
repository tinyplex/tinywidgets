import * as Lucide from 'lucide-react';
import {Code} from 'tinywidgets';
import {ROUTES} from './index.ts';
import React from 'react';
import {Title} from '../components/Title.tsx';

export const Installation = () => {
  return (
    <>
      <Title>
        <Lucide.WandSparkles />
        Installation
      </Title>
      <p>
        TinyWidgets works well with a Vite-based development and build
        environment, because then it&apos;s particularly easy to use
        Vanilla-Extract.
      </p>
      <Code
        code={`
$> npm install tinywidgets
        `}
      />
    </>
  );
};

ROUTES.installation = ['Installation', Installation, Lucide.WandSparkles];
