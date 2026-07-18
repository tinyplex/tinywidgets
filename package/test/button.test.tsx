import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type {FormEvent} from 'react';
import {describe, expect, test, vi} from 'vitest';
import {Button} from '../src/components/Button/index.tsx';

describe('Button', () => {
  test('does not submit a form by default', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn((event: FormEvent) => event.preventDefault());

    render(
      <form onSubmit={onSubmit}>
        <Button title="Save" />
      </form>,
    );

    await user.click(screen.getByRole('button', {name: 'Save'}));

    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('allows explicit submit buttons', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn((event: FormEvent) => event.preventDefault());

    render(
      <form onSubmit={onSubmit}>
        <Button title="Save" type="submit" />
      </form>,
    );

    await user.click(screen.getByRole('button', {name: 'Save'}));

    expect(onSubmit).toHaveBeenCalledOnce();
  });
});
