import {render, screen, within} from '@testing-library/react';
import {CircleHelp} from 'lucide-react';
import {lazy, memo, Suspense} from 'react';
import {createPortal} from 'react-dom';
import {describe, expect, test} from 'vitest';
import {renderComponentOrNode} from '../src/common/functions.tsx';

describe('renderComponentOrNode', () => {
  test('renders forward-ref component types', () => {
    const {container} = render(<div>{renderComponentOrNode(CircleHelp)}</div>);

    expect(container.querySelector('svg')).not.toBeNull();
  });

  test('renders memo component types', () => {
    const MemoComponent = memo(() => <span>Memo content</span>);

    render(<div>{renderComponentOrNode(MemoComponent)}</div>);

    expect(screen.getByText('Memo content')).toBeDefined();
  });

  test('renders lazy component types', async () => {
    const LazyComponent = lazy(async () => ({
      default: () => <span>Lazy content</span>,
    }));

    render(
      <Suspense fallback="Loading">
        {renderComponentOrNode(LazyComponent)}
      </Suspense>,
    );

    expect(await screen.findByText('Lazy content')).toBeDefined();
  });

  test('renders strings as text', () => {
    render(<div>{renderComponentOrNode('Plain text')}</div>);

    expect(screen.getByText('Plain text')).toBeDefined();
  });

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
