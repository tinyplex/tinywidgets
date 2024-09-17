import {Glob} from 'bun';
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
        const docs = objEnsure(objEnsure(allDocs, 'components', {}), name, {});

        commentsAndTags.forEach((commentOrTag) => {
          objEnsure(docs, 'comments', []).push(
            ts.getTextOfJSDocComment(commentOrTag.comment),
          );
          ts.getJSDocTags(node).forEach((tag) => {
            if (ts.isJSDocParameterTag(tag)) {
              objEnsure(
                objEnsure(docs, 'params', {}),
                tag.name.getText(),
                [],
              ).push(ts.getTextOfJSDocComment(tag.comment));
            } else {
              const tagName = tag.tagName.getText();
              const comment = ts.getTextOfJSDocComment(tag.comment);
              objEnsure(docs, tagName, []).push(
                tagName == 'example' ? comment : marked(comment ?? ''),
              );
            }
          });

          const visitProps = (node: ts.Node) => {
            if (ts.isPropertySignature(node)) {
              const propName = node.name.getText();
              const propDocs = objEnsure(
                objEnsure(docs, 'props', {}),
                propName,
                [],
              );
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

const allDocs: any = {};
await Promise.all(
  [...new Glob('../dist/src/**/*.*').scanSync()].map(async (file) => {
    await extract(file, allDocs);
  }),
);

// ---

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

const componentFile: string[] = [
  `import React from 'react';`,
  `import {Routes} from '..';`,
  `import {Code} from 'tinywidgets';`,
  `import {Component} from './Component';`,
  `export const COMPONENT_ROUTES: Routes = {};`,
];

Object.entries(allDocs.components).forEach(([name, docs]: [string, any]) => {
  componentFile.push(
    ``,
    `import {${name}} from 'tinywidgets';`,
    `COMPONENT_ROUTES['components/${name}'] = ['${name}', () => (<Component `,
    `  title='${name}'`,
    `  comments={<>${docs.comments?.map(marked)}</>}`,
    `  props={{`,
    ...Object.entries(docs.props).map(
      ([prop, comments]) => `${prop}:<>${comments as any}</>,`,
    ),
    `}}`,
    `  examples={[`,
    ...(docs.example ?? [])?.map((example: string) => {
      return `[<>${marked(example)}</>,${example.match(TSX)?.[1]}],`;
    }),
    `  ]}`,
    `/>)];`,
  );
});

Bun.write(`src/routes/components/index.tsx`, componentFile.join('\n'));
