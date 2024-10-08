import {Code, Collapsible, Detail, Hr, Row} from 'tinywidgets';
import React, {Fragment} from 'react';
import {exampleComment, exampleExec} from './Api.css.ts';
import {Title} from '../components/Title.tsx';

export const Api = ({
  title,
  type,
  importLine,
  icon: Icon,
  comments,
  params,
  props,
  examples,
}: {
  readonly title: string;
  readonly type: string;
  readonly importLine: string;
  readonly icon?: any;
  readonly comments: any;
  readonly params: any;
  readonly props: any;
  readonly examples: any;
}) => {
  const exampleCount = Object.entries(examples).length;
  return (
    <>
      <Title>
        <Icon />
        {title}
      </Title>
      <Code code={importLine} />
      {comments}
      {type == 'CSS' ? (
        <p>
          Note that this constant needs to be imported from TinyWidgets{`' `}
          <code>/css</code> sub-module.
        </p>
      ) : null}
      <Hr />
      {exampleCount > 0 ? (
        <Collapsible
          title={'Example' + (exampleCount > 1 ? 's' : '')}
          id="examples"
          startOpen
        >
          {examples.map(([comment, exec]: any, key: number) => (
            <Fragment key={key}>
              {key == 0 ? null : <Hr />}
              <Row>
                <div className={exampleExec}>{exec}</div>
                <div className={exampleComment}>{comment}</div>
              </Row>
            </Fragment>
          ))}
        </Collapsible>
      ) : null}
      {Object.entries(params).length > 0 &&
      Object.entries(props).length == 0 ? (
        <Collapsible title="Parameters" id="params" startOpen>
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
