import React, {Fragment} from 'react';
import {Code, Collapsible, Detail, Hr, Row} from 'tinywidgets';
import {titleStyle} from '../../index.css.ts';
import {exampleComment, exampleExec} from './Component.css';

export const Component = ({
  title,
  icon: Icon,
  comments,
  props,
  examples,
}: {
  title: string;
  icon?: any;
  comments: any;
  props: any;
  examples: any;
}) => {
  return (
    <>
      <h1 className={titleStyle}>{title}</h1>
      <Code code={`import {${title}} from 'tinywidgets';`} />
      {comments}
      <Hr />
      <Collapsible title="Examples" id="examples" startOpen>
        {examples.map(([comment, exec]: any, key: number) => (
          <Fragment key={key}>
            {key == 0 ? null : <Hr />}
            <Row variant="1|2">
              <div className={exampleExec}>{exec}</div>
              <div className={exampleComment}>{comment}</div>
            </Row>
          </Fragment>
        ))}
      </Collapsible>
      {Object.entries(props).length > 0 ? (
        <Collapsible title="Props" id="props" startOpen>
          <Detail data={props} />
        </Collapsible>
      ) : null}
    </>
  );
};
