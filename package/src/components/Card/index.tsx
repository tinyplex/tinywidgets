import {X} from 'lucide-react';
import type {ComponentType, ReactNode} from 'react';
import {classNames, renderComponentOrNode} from '../../common/functions';
import {iconSize} from '../../css/dimensions.css';
import {
  card,
  titleButton,
  titledCard,
  titledCardContent,
  title as titleStyle,
  titleRight as titleStyleRight,
} from './index.css';

/**
 * The `Card` component displays a simple rectangular container. If a `title`
 * prop is provided, it is displayed in the same style as a `Collapsible`
 * component, but without the collapsible behavior.
 *
 * @param props The props for the component.
 * @returns The Card component.
 * @example
 * ```tsx
 * <Card>
 *   <h1>Welcome</h1>
 *   <Hr />
 *   <p>We hope you enjoy TinyWidgets</p>
 * </Card>
 * ```
 * This example shows a simple card.
 * @example
 * ```tsx
 * <Card
 *   title="TinyWidgets"
 *   icon={Lucide.Grid3x3}
 * >
 *   <p>Always open</p>
 * </Card>
 * ```
 * This example shows a titled card.
 * @example
 * ```tsx
 * <Card
 *   title="TinyWidgets"
 *   onClose={() => console.log('Closed')}
 * >
 *   <p>Close me</p>
 * </Card>
 * ```
 * This example shows a card with a close button.
 * @icon Lucide.Square
 */
export const Card = ({
  icon: Icon,
  title,
  titleRight,
  onClose,
  className,
  children,
}: {
  /**
   * An optional component which renders an icon for the top of the card, and
   * which must accept a className prop.
   */
  readonly icon?: ComponentType<{className?: string}>;
  /**
   * An optional component, element, or string which renders the title of
   * the top of the card.
   */
  readonly title?: ComponentType | ReactNode;
  /**
   * An optional component, element, or string which renders a second title
   * on the right side of the top of the card.
   */
  readonly titleRight?: ComponentType | ReactNode;
  /**
   * A handler called when the user clicks on the close button.
   */
  readonly onClose?: () => void;
  /**
   * An extra CSS class name for the component.
   */
  readonly className?: string;
  /**
   * The children of the component that go inside the card.
   */
  readonly children: ReactNode;
}) => {
  const hasHeader =
    Icon != null || title != null || titleRight != null || onClose != null;

  return hasHeader ? (
    <div className={classNames(titledCard, className)}>
      <div
        className={titleButton[onClose ? 'closable' : 'static']}
        onClick={onClose}
        {...(onClose ? {title: 'Close'} : {})}
      >
        {Icon ? <Icon className={iconSize} /> : null}
        {title ? (
          <span className={titleStyle}>{renderComponentOrNode(title)}</span>
        ) : null}
        {titleRight ? (
          <span className={titleStyleRight}>
            {renderComponentOrNode(titleRight)}
          </span>
        ) : null}
        {onClose ? <X className={iconSize} /> : null}
      </div>
      <div className={titledCardContent}>{children}</div>
    </div>
  ) : (
    <div className={classNames(card, className)}>{children}</div>
  );
};
