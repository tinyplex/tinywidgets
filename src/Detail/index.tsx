/** @jsx createElement */

import React from 'react';
import {classNames} from '../';
import {detailCell, detailRow, detailTable} from './index.css';

const {createElement} = React;

export const Detail = ({
  data,
  className,
}: {
  data: Record<string, React.ReactNode>;
  className?: string;
}) => {
  return (
    <table className={classNames(detailTable, className)}>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key} className={detailRow}>
            <th className={detailCell}>{key}:</th>
            <td className={detailCell}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
