import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {describe, expect, test, vi} from 'vitest';
import {Card} from '../src/components/Card/index.tsx';

describe('Card', () => {
  test('provides a keyboard-accessible close button', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <Card title="Settings" onClose={onClose}>
        Card content
      </Card>,
    );

    await user.click(screen.getByText('Settings'));
    expect(onClose).not.toHaveBeenCalled();

    const closeButton = screen.getByRole('button', {name: 'Close'});
    await user.tab();
    expect(document.activeElement).toBe(closeButton);
    await user.keyboard('{Enter}');

    expect(onClose).toHaveBeenCalledOnce();
  });
});
