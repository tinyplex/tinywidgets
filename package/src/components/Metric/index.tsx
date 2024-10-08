import type {ComponentType, ReactNode} from 'react';
import {classNames, renderComponentOrNode} from '../../common/functions';
import {metric, metricLabel, metricNumber} from './index.css';
import React from 'react';
import {iconSize} from '../../css/dimensions.css';

/**
 * The `Metric` component displays a metric as a prominent numerical value with
 * a label above.
 *
 * @param props The props for the component.
 * @returns The Metric component.
 * @example
 * ```tsx
 * <Metric
 *   icon={Lucide.ChartLine}
 *   title="Number"
 *   number="57"
 * />
 * ```
 * This example shows the basic usage of the Metric component.
 * @icon Lucide.SquareSigma
 */
export const Metric = ({
  icon: Icon,
  title: titleComponentOrNode,
  number: numberComponentOrNode,
  className,
}: {
  /**
   * An optional component which renders an icon for the metric panel, and which
   * must accept a className prop.
   */
  readonly icon?: ComponentType<{className?: string}>;
  /**
   * An optional component, element, or string which renders the title of
   * the metric panel.
   */
  readonly title?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders the number of
   * the metric panel.
   */
  readonly number?: ComponentType | ReactNode;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
}) => (
  <div className={classNames(metric, className)}>
    <div className={metricLabel}>
      {Icon ? <Icon className={iconSize} /> : null}
      {renderComponentOrNode(titleComponentOrNode)}
    </div>
    <div className={metricNumber}>
      {renderComponentOrNode(numberComponentOrNode)}
    </div>
  </div>
);
