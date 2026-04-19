import {useEffect, useRef, useState} from 'react';
import {classNames} from '../../common/functions';
import {
  header,
  label,
  loading,
  row,
  rows as rowsClass,
  spinner,
} from './index.css';

const WIDTHS = ['100%', '92%', '84%', '96%', '72%', '88%', '67%', '81%'];
const DEFAULT_ROW_COUNT = 5;

/**
 * The `Loading` component displays a compact spinner with optional shimmer rows
 * to reserve space while content is loading.
 *
 * @param props The props for the component.
 * @returns The Loading component.
 * @example
 * ```tsx
 * <Loading labelText="Loading dependencies" />
 * ```
 * This example shows the default loading panel. Add a CSS height to the
 * component to fit more placeholder rows automatically.
 * @example
 * ```tsx
 * <>
 *   <style>{`
 *     .tallLoading {
 *       height: 12rem;
 *     }
 *   `}</style>
 *   <Loading className="tallLoading" labelText="Loading dependencies" />
 * </>
 * ```
 * This example uses CSS to make the loading panel taller, allowing more
 * placeholder rows to fit automatically.
 * @icon Lucide.LoaderCircle
 */
export const Loading = ({
  labelText = 'Loading',
  className,
}: {
  /**
   * The label shown beside the spinner.
   */
  readonly labelText?: string;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);
  const measureRowRef = useRef<HTMLDivElement>(null);

  const [rowCount, setRowCount] = useState(DEFAULT_ROW_COUNT);

  useEffect(() => {
    const updateRowCount = () => {
      const root = rootRef.current;
      const header = headerRef.current;
      const rows = rowsRef.current;
      const measureRow = measureRowRef.current;
      if (
        root == null ||
        header == null ||
        rows == null ||
        measureRow == null
      ) {
        return;
      }

      const rootStyles = getComputedStyle(root);
      const rowsStyles = getComputedStyle(rows);
      const rootGap =
        parseFloat(rootStyles.rowGap || rootStyles.gap || '0') || 0;
      const rowsGap =
        parseFloat(rowsStyles.rowGap || rowsStyles.gap || '0') || 0;
      const availableHeight =
        root.getBoundingClientRect().height -
        header.getBoundingClientRect().height -
        rootGap;
      const rowHeight = measureRow.getBoundingClientRect().height;

      const nextRowCount = Math.max(
        0,
        Math.floor((availableHeight + rowsGap) / (rowHeight + rowsGap)),
      );
      setRowCount((currentRowCount) =>
        currentRowCount === nextRowCount ? currentRowCount : nextRowCount,
      );
    };

    updateRowCount();
    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    const resizeObserver = new ResizeObserver(updateRowCount);
    if (rootRef.current != null) {
      resizeObserver.observe(rootRef.current);
    }
    if (headerRef.current != null) {
      resizeObserver.observe(headerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={classNames(loading, className)}>
      <div ref={headerRef} className={header}>
        <span className={spinner} />
        <span className={label}>{labelText}</span>
      </div>
      <div ref={rowsRef} className={rowsClass}>
        <div
          ref={measureRowRef}
          className={row}
          style={{position: 'absolute', width: 0, visibility: 'hidden'}}
        />
        {rowCount > 0
          ? Array.from({length: rowCount}, (_, index) => (
              <div
                key={index}
                className={row}
                style={{width: WIDTHS[index % WIDTHS.length]}}
              />
            ))
          : null}
      </div>
    </div>
  );
};
