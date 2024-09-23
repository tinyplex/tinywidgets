import React, {Fragment} from 'react';
import {Code, Collapsible, Detail, Hr, Row} from 'tinywidgets';
import {Title} from '../components/Title.tsx';
import {exampleComment, exampleExec} from './Api.css.ts';

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
  title: string;
  type: string;
  importLine: string;
  icon?: any;
  comments: any;
  params: any;
  props: any;
  examples: any;
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
          Note that this constant needs to be imported from TinyWidgets'{' '}
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
              <Row variant="1|2">
                <div className={exampleExec}>{exec}</div>
                <div className={exampleComment}>{comment}</div>
              </Row>
            </Fragment>
          ))}
        </Collapsible>
      ) : null}
      {Object.entries(params).length > 0 ? (
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
