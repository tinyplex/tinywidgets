import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {CircleHelp} from 'lucide-react';
import {describe, expect, test, vi} from 'vitest';

describe('Flyout', () => {
  test('falls back inline when a bare App has no portal', async () => {
    vi.stubGlobal('CSS', {supports: () => true});
    vi.resetModules();

    const [{App}, {Flyout}] = await Promise.all([
      import('../src/components/App/index.tsx'),
      import('../src/components/Flyout/index.tsx'),
    ]);
    const user = userEvent.setup();

    render(
      <App>
        <Flyout icon={CircleHelp} title="Help">
          Flyout content
        </Flyout>
      </App>,
    );

    await user.click(await screen.findByRole('button', {name: 'Help'}));

    expect(await screen.findByText('Flyout content')).toBeDefined();
  });
});
