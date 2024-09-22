import type {ReactNode} from 'react';
import React from 'react';
import {classNames} from '../../css/render';
import {detailCell, detailRow, detailTable} from './index.css';

/**
 * The Detail component displays a set of key-value pairs in a two-column table.
 *
 * @param props The props for the component.
 * @returns The Detail component.
 * @example
 * ```tsx
 * <Detail
 *  data={{
 *    normal: 'lorem ipsum',
 *    italic: <i>lorem ipsum</i>,
 *    underline: <u>lorem ipsum</u>,
 *  }}
 * />
 * ```
 * This example shows the basic Collapsible component.
 * @icon Lucide.Table
 */
export const Detail = ({
  data,
  className,
}: {
  /**
   * The data to display in the detail table. The values can be any React node.
   */
  data: Record<string, ReactNode>;
  /**
   * An extra CSS class name for the component.
   */
  className?: string;
}) => (
  <table className={classNames(detailTable, className)}>
    <tbody>
      {Object.entries(data).map(([key, value]) => (
        <tr key={key} className={detailRow}>
          <th className={detailCell}>{key}</th>
          <td className={detailCell}>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
