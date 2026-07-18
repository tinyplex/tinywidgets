import {render, screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import {Image} from '../src/components/Image/index.tsx';

describe('Image', () => {
  test('renders alternative text on the image', () => {
    render(<Image src="/avatar.png" alt="User avatar" />);

    expect(screen.getByRole('img', {name: 'User avatar'})).toBeDefined();
  });
});
