import type {ReactNode} from 'react';
import {classNames} from '../../common/functions';
import {table} from './index.css';

/**
 * The `Table` component displays a table with some simple default styling.
 *
 * @param props The props for the component.
 * @returns The Table component.
 * @example
 * ```tsx
 * <Table>
 *   <tr><th>Column 1</th><th>Column 2</th></tr>
 *   <tr><td>Cell A</td><td>Cell B</td></tr>
 *   <tr><td>Cell C</td><td>Cell D</td></tr>
 * </Table>
 * ```
 * This example shows a simple table.
 * @icon Lucide.LucideTable2
 */
export const Table = ({
  className,
  children,
}: {
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
  /**
   * The children (`tr` rows) that go inside the table.
   */
  readonly children: ReactNode;
}) => <table className={classNames(table, className)}>{children}</table>;
