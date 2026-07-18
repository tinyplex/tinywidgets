import {render, screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import {Button} from '../src/components/Button/index.tsx';

describe('test harness', () => {
  test('renders a TinyWidgets component', () => {
    render(<Button title="Ready" />);

    expect(screen.getByRole('button', {name: 'Ready'})).toBeDefined();
  });
});
