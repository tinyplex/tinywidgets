import {Glob} from 'bun';
import {watch} from 'fs';
import {marked} from 'marked';
import ts, {isVariableDeclaration} from 'typescript';

const TSX = /```tsx\n(.*?)\n```/ms;

const objEnsure = (obj: any, key: string, value: any) => {
  if (!obj[key]) {
    obj[key] = value;
  }
  return obj[key];
};

const extract = async (file: string, allDocs: {[variable: string]: any}) => {
  const code = await Bun.file(file).text();
  const sourceFile = ts.createSourceFile(
    file,
    code,
    ts.ScriptTarget.Latest,
    true,
  );

  const visit = (node: ts.Node) => {
    if (isVariableDeclaration(node)) {
      const commentsAndTags = ts.getJSDocCommentsAndTags(node);
      if (commentsAndTags.length > 0) {
        const name = node.name.getText();
        const docs = objEnsure(allDocs, name, {
          type: file.includes('/components/') ? 'component' : 'hook',
          comments: [],
          example: [],
          icon: [],
          params: {},
          props: {},
        });

        commentsAndTags.forEach((commentOrTag) => {
          docs.comments.push(ts.getTextOfJSDocComment(commentOrTag.comment));
          ts.getJSDocTags(node).forEach((tag) => {
            if (ts.isJSDocParameterTag(tag)) {
              objEnsure(docs.params, tag.name.getText(), []).push(
                ts.getTextOfJSDocComment(tag.comment),
              );
            } else {
              const tagName = tag.tagName.getText();
              const comment = ts.getTextOfJSDocComment(tag.comment);
              objEnsure(docs, tagName, []).push(
                tagName == 'example' || tagName == 'icon'
                  ? comment
                  : marked(comment ?? ''),
              );
            }
          });

          const visitProps = (node: ts.Node) => {
            if (ts.isPropertySignature(node)) {
              const propName = node.name.getText();
              const propDocs = objEnsure(docs.props, propName, []);
              const commentsAndTags = ts.getJSDocCommentsAndTags(node);
              if (commentsAndTags.length > 0) {
                commentsAndTags.forEach((commentOrTag) => {
                  propDocs.push(
                    marked(
                      ts.getTextOfJSDocComment(commentOrTag.comment) ?? '',
                    ),
                  );
                });
              }
            } else {
              ts.forEachChild(node, visitProps);
            }
          };

          ts.forEachChild(node, visitProps);
        });
      }
    } else {
      ts.forEachChild(node, visit);
    }
  };
  visit(sourceFile);
};

const extractAll = async () => {
  const allDocs: any = {};
  await Promise.all(
    [...new Glob('../dist/src/**/*.*').scanSync()].map(async (file) => {
      await extract(file, allDocs);
    }),
  );

  marked.use({
    extensions: [
      {
        name: 'code',
        renderer: (token) => {
          return `<Code code={\`${token.text.replaceAll(/`/g, '\\`')}\`} />`;
        },
      },
    ],
  });

  const apiFile: string[] = [
    `import React from 'react';`,
    `import {Routes} from '..';`,
    `import {Component} from './Component';`,
    `import * as Lucide from 'lucide-react';`,
    `export const COMPONENT_ROUTES: Routes = {};`,
  ];

  Object.entries(allDocs).forEach(([name, docs]: [string, any]) => {
    if (docs.type == 'component') {
      apiFile.push(
        ``,
        `import {${name}} from 'tinywidgets';`,
        `COMPONENT_ROUTES['components/${name}'] = ['${name}', () => (<Component `,
        `  title='${name}'`,
        `  comments={<>${docs.comments.map(marked)}</>}`,
        `  icon={${docs.icon[0]}}`,
        `  props={{`,
        ...Object.entries(docs.props || {}).map(
          ([prop, comments]) => `${prop}:<>${comments as any}</>,`,
        ),
        `}}`,
        `  examples={[`,
        ...docs.example?.map((example: string) => {
          return `[<>${marked(example)}</>,${example.match(TSX)?.[1]}],`;
        }),
        `  ]}`,
        `/>), ${docs.icon[0]}];`,
      );
    }
  });

  console.log(process.argv);
  Bun.write(`src/pages/api.tsx`, apiFile.join('\n'));
};

if (process.argv[2] == '--watch') {
  extractAll();
  console.log('Watching');
  watch('../dist/src', {recursive: true}, extractAll);
} else {
  extractAll();
}
