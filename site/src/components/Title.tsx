import {ImageLabel} from 'tinywidgets/source';
import {title} from './Title.css';

export const Title = ({
  icon,
  title: titleComponentOrNode,
}: {
  readonly icon: Parameters<typeof ImageLabel>[0]['image'];
  readonly title: Parameters<typeof ImageLabel>[0]['text'];
}) => (
  <ImageLabel
    as="h1"
    className={title}
    image={icon}
    text={titleComponentOrNode}
  />
);
