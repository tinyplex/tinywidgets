import React from 'react';
import {Card, Code, Collapsible, Detail, Hr} from 'tinywidgets';
import {exampleCard, exampleComment, exampleExec} from './Component.css';

export const Component = ({
  title,
  comments,
  props,
  examples,
}: {
  title: string;
  comments: any;
  props: any;
  examples: any;
}) => {
  return (
    <>
      <h1>{title}</h1>
      <Code code={`import {${title}} from 'tinywidgets';`} />
      {comments}
      <Hr />
      <Collapsible label="Examples" id="examples" startOpen>
        {examples.map(([comment, exec]: any, key: number) => (
          <Card className={exampleCard} key={key}>
            <div className={exampleExec}>{exec}</div>
            <div className={exampleComment}>{comment}</div>
          </Card>
        ))}
      </Collapsible>
      <Collapsible label="Props" id="props" startOpen>
        <Detail data={props} />
      </Collapsible>
    </>
  );
};
