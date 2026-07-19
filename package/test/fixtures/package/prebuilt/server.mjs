import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createElement} from 'react';
import {renderToString} from 'react-dom/server';
import {Button} from 'tinywidgets/prebuilt';
import {colors} from 'tinywidgets/prebuilt/css';

const html = renderToString(createElement(Button, {title: 'Ready'}));
assert.match(html, />Ready</);

const accentVariable = colors.accent.match(/^var\((.+)\)$/)?.[1];
assert.ok(accentVariable);
const styles = await readFile(
  new URL(import.meta.resolve('tinywidgets/prebuilt/styles.css')),
  'utf8',
);
assert.ok(styles.includes(accentVariable));
