// @vitest-environment node

import {renderToString} from 'react-dom/server';
import {describe, expect, test} from 'vitest';

describe('server rendering', () => {
  test('imports and renders from the public entry point', async () => {
    const {Button} = await import('../src/index.ts');

    expect(renderToString(<Button title="Ready" />)).toContain('<button');
  });
});
