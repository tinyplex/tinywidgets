import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {describe, expect, test} from 'vitest';
import {App} from '../src/components/App/index.tsx';

describe('App', () => {
  test('exposes accessible side navigation controls', async () => {
    sessionStorage.clear();
    const user = userEvent.setup();

    render(
      <App
        title="TinyWidgets"
        sideNav={<a href="/settings">Settings</a>}
        sideNavToggle="always"
        main="Main content"
      />,
    );

    const openButton = await screen.findByRole('button', {
      name: 'Open navigation',
    });
    const navigation = screen.getByRole('navigation', {
      name: 'Side navigation',
    });

    expect(openButton.getAttribute('aria-controls')).toBe(navigation.id);
    expect(openButton.getAttribute('aria-expanded')).toBe('false');
    expect(screen.getAllByRole('navigation')).toHaveLength(2);

    openButton.focus();
    await user.keyboard('{Enter}');

    const closeButton = screen.getByRole('button', {
      name: 'Close navigation',
    });
    expect(closeButton.getAttribute('aria-expanded')).toBe('true');
  });
});
