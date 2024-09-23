import React, {Fragment} from 'react';
import {Code, Collapsible, Detail, Hr, Row} from 'tinywidgets';
import {titleStyle} from '../index.css.ts';
import {exampleComment, exampleExec} from './Api.css.ts';

export const Api = ({
  title,
  icon: Icon,
  comments,
  params,
  props,
  examples,
}: {
  title: string;
  icon?: any;
  comments: any;
  params: any;
  props: any;
  examples: any;
}) => {
  return (
    <>
      <h1 className={titleStyle}>
        <Icon />
        {title}
      </h1>
      <Code code={`import {${title}} from 'tinywidgets';`} />
      {comments}
      <Hr />
      {Object.entries(examples).length > 0 ? (
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
      ) : null}
      {Object.entries(params).length > 0 ? (
        <Collapsible title="Params" id="params" startOpen>
          <Detail data={params} />
        </Collapsible>
      ) : null}
      {Object.entries(props).length > 0 ? (
        <Collapsible title="Props" id="props" startOpen>
          <Detail data={props} />
        </Collapsible>
      ) : null}
    </>
  );
};
