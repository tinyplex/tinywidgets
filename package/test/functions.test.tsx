import {render, screen, within} from '@testing-library/react';
import {createPortal} from 'react-dom';
import {describe, expect, test} from 'vitest';
import {renderComponentOrNode} from '../src/common/functions.tsx';

describe('renderComponentOrNode', () => {
  test('renders arrays of nodes', () => {
    render(<div>{renderComponentOrNode(['First', 'Second'])}</div>);

    expect(screen.getByText('FirstSecond')).toBeDefined();
  });

  test('renders portals', () => {
    const portal = document.createElement('div');

    render(
      <div>
        {renderComponentOrNode(createPortal('Portal content', portal))}
      </div>,
    );

    expect(within(portal).getByText('Portal content')).toBeDefined();
  });
});
