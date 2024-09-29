import ts, {isVariableDeclaration} from 'typescript';
import {Glob} from 'bun';
import {marked} from 'marked';
import {watch} from 'fs';

const TS = /```tsx\n(.*?)(<|(\/\/))/ms;
const TSX = /```tsx.*?\n(<.*?)\n```/ms;

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
          file,
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

const buildApi = async () => {
  const allDocs: any = {};
  await Promise.all(
    [...new Glob('../package/src/**/*.*').scanSync()].map(async (file) => {
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
    `/* eslint-disable */`,
    `import React from 'react';`,
    `import type {Routes} from './index.ts';`,
    `import {ROUTES} from './index.ts';`,
    `import {Api} from './Api.tsx';`,
    `import * as Lucide from 'lucide-react';`,
    `export const COMPONENT_ROUTES: Routes = {};`,
    `export const HOOK_ROUTES: Routes = {};`,
    `export const FUNCTION_ROUTES: Routes = {};`,
    `export const CSS_ROUTES: Routes = {};`,
    `export const OBJECT_ROUTES: Routes = {};`,
  ];

  Object.keys(allDocs)
    .sort()
    .forEach((name: string) => {
      const docs = allDocs[name];
      const file = docs.file;
      const type = file.includes('/components')
        ? 'COMPONENT'
        : file.includes('/stores')
        ? 'HOOK'
        : file.includes('/functions')
        ? 'FUNCTION'
        : file.includes('/css')
        ? 'CSS'
        : 'OBJECT';
      const icon =
        docs.icon[0] ??
        (type == 'COMPONENT'
          ? 'Lucide.Square'
          : type == 'HOOK'
          ? 'Lucide.SquareFunction'
          : type == 'FUNCTION'
          ? 'Lucide.SquarePi'
          : type == 'CSS'
          ? 'Lucide.Paintbrush'
          : 'Lucide.Braces');
      const importLine =
        `import {${name}} from ` +
        `'tinywidgets${type == 'CSS' ? '/css' : ''}';`;

      apiFile.push(
        ``,
        importLine,
        `${type}_ROUTES['${type.toLowerCase()}/${name}'] = ['${name}', () => {`,
        ...(docs.example ?? [])
          .map((example: string) => example.match(TS)?.[1].trim())
          .filter(Boolean),
        `return (<Api `,
        `  type='${type}'`,
        `  importLine="${importLine}"`,
        `  title='${name}'`,
        `  comments={<>${docs.comments.map(marked)}</>}`,
        `  icon={${icon}}`,
        `  params={{`,
        ...Object.entries(docs.params || {}).map(
          ([param, comments]) => `${param}:<>${comments as any}</>,`,
        ),
        `}}`,
        `  props={{`,
        ...Object.entries(docs.props || {}).map(
          ([prop, comments]) => `${prop}:<>${comments as any}</>,`,
        ),
        `}}`,
        `  examples={[`,
        ...(docs.example ?? []).map(
          (example: string) =>
            `[<>${marked(example)}</>,${example.match(TSX)?.[1]}],`,
        ),
        `  ]}`,
        `/>);`,
        `}, ${icon}];`,
      );
    });
  apiFile.push(
    `Object.assign(ROUTES, COMPONENT_ROUTES, HOOK_ROUTES, `,
    `FUNCTION_ROUTES, CSS_ROUTES, OBJECT_ROUTES);`,
  );

  Bun.write(`src/pages/_api.tsx`, apiFile.join('\n'));
};

if (process.argv[2] == '--watch') {
  buildApi();
  watch('../package/src', {recursive: true}, buildApi);
} else {
  buildApi();
}
