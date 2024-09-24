/* eslint-disable */
import React from 'react';
import type {Routes} from './index.ts';
import {ROUTES} from './index.ts';
import {Api} from './Api.tsx';
import * as Lucide from 'lucide-react';
export const COMPONENT_ROUTES: Routes = {};
export const HOOK_ROUTES: Routes = {};
export const FUNCTION_ROUTES: Routes = {};
export const CSS_ROUTES: Routes = {};
export const OBJECT_ROUTES: Routes = {};

import {classNames} from 'tinywidgets';
FUNCTION_ROUTES['function/classNames'] = ['classNames', () => {
const classes = classNames(
  'class1',
  false && 'class2',
  true && 'class3',
);
return (<Api 
  type='FUNCTION'
  importLine="import {classNames} from 'tinywidgets';"
  title='classNames'
  comments={<><p>The <code>classNames</code> function returns a concatenated list of class names,
filtering out any <code>null</code> or <code>undefined</code> values.</p>
<p>This allows you to easily toggle classes based on conditions.</p>
</>}
  icon={Lucide.SquarePi}
  params={{
}}
  props={{
}}
  examples={[
[<><Code code={`const classes = classNames(
  'class1',
  false && 'class2',
  true && 'class3',
);
// ...
<Card className={classes}>
  <code>{classes}</code>
</Card>`} /><p>This example shows the function returning a class name list.</p>
</>,<Card className={classes}>
  <code>{classes}</code>
</Card>],
  ]}
/>);
}, Lucide.SquarePi];

import {Summary} from 'tinywidgets';
COMPONENT_ROUTES['component/Summary'] = ['Summary', () => {
return (<Api 
  type='COMPONENT'
  importLine="import {Summary} from 'tinywidgets';"
  title='Summary'
  comments={<><p>The <code>Summary</code> component displays an image on the left, and other content
(probably text) on the right.</p>
</>}
  icon={Lucide.LayoutList}
  params={{
props:<>The props for the component.</>,
}}
  props={{
icon:<><p>An optional component which renders an icon for the summary, and which
must accept a className prop.</p>
</>,
src:<><p>The source of the image, which used if the <code>icon</code> prop is not present.</p>
</>,
className:<><p>An extra CSS class name for the component.</p>
</>,
children:<><p>The children of the component, shown to the right of the image.</p>
</>,
}}
  examples={[
[<><Code code={`<Summary src="/favicon.svg">
  <h2>TinyWidgets</h2>
  <p>Widgets for the modern web.</p>
</Summary>`} /><p>This example shows a default Summary component.</p>
</>,<Summary src="/favicon.svg">
  <h2>TinyWidgets</h2>
  <p>Widgets for the modern web.</p>
</Summary>],
  ]}
/>);
}, Lucide.LayoutList];

import {Image} from 'tinywidgets';
COMPONENT_ROUTES['component/Image'] = ['Image', () => {
return (<Api 
  type='COMPONENT'
  importLine="import {Image} from 'tinywidgets';"
  title='Image'
  comments={<><p>The <code>Image</code> component displays an image, with a number of common variants.</p>
</>}
  icon={Lucide.Image}
  params={{
props:<>The props for the component.</>,
}}
  props={{
src:<><p>The source of the image.</p>
</>,
onClick:<><p>A handler called when the user clicks on the image.</p>
</>,
variant:<><p>A variant of the image, one of:</p>
<ul>
<li><code>default</code></li>
<li><code>logo</code></li>
<li><code>avatar</code></li>
<li><code>icon</code></li>
</ul>
</>,
alt:<><p>Alternative text shown when the user hovers over the image.</p>
</>,
className:<><p>An extra CSS class name for the component.</p>
</>,
}}
  examples={[
[<><Code code={`<Image
  src="/favicon.svg"
  onClick={() => alert('Clicked!')}
  alt="TinyWidgets"
/>`} /><p>This example shows the <code>default</code> variant of the Image component.</p>
</>,<Image
  src="/favicon.svg"
  onClick={() => alert('Clicked!')}
  alt="TinyWidgets"
/>],
[<><Code code={`<Image
  src="/favicon.svg"
  variant="logo"
/>`} /><p>This example shows the <code>logo</code> variant of the Image component.</p>
</>,<Image
  src="/favicon.svg"
  variant="logo"
/>],
[<><Code code={`<Image
  src="/favicon.svg"
  variant="avatar"
/>`} /><p>This example shows the <code>avatar</code> variant of the Image component.</p>
</>,<Image
  src="/favicon.svg"
  variant="avatar"
/>],
[<><Code code={`<Image
  src="/favicon.svg"
  variant="icon"
/>`} /><p>This example shows the <code>icon</code> variant of the Image component.</p>
</>,<Image
  src="/favicon.svg"
  variant="icon"
/>],
  ]}
/>);
}, Lucide.Image];

import {code} from 'tinywidgets/css';
CSS_ROUTES['css/code'] = ['code', () => {
return (<Api 
  type='CSS'
  importLine="import {code} from 'tinywidgets/css';"
  title='code'
  comments={<><p>The <code>code</code> object exposes the CSS variables used by TinyWidgets for coloring
the code blocks, so that you can use them directly in your own application.</p>
<p>The values are derived from the <a href="https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css">prism-one-dark</a> and <a href="https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-light.css">prism-one-light</a> themes. The full set of members is:</p>
<ul>
<li><code>mono-1</code></li>
<li><code>mono-2</code></li>
<li><code>mono-3</code></li>
<li><code>hue-1</code></li>
<li><code>hue-2</code></li>
<li><code>hue-3</code></li>
<li><code>hue-4</code></li>
<li><code>hue-5</code></li>
<li><code>hue-5-2</code></li>
<li><code>hue-6</code></li>
<li><code>hue-6-2</code></li>
<li><code>syntax-fg</code></li>
<li><code>syntax-bg</code></li>
<li><code>syntax-gutter</code></li>
<li><code>syntax-guide</code></li>
<li><code>syntax-accent</code></li>
</ul>
<p>You can use these variables directly in React components that take style
attributes, like this:</p>
<Code code={`<code style={{color: code['hue-2']}}>function</code>`} /><p>And if you are using Vanilla-Extract for your app&#39;s styles, use them in your
style declarations like this:</p>
<Code code={`export const functionStyle = style({color: code['hue-2']});`} /></>}
  icon={Lucide.Palette}
  params={{
}}
  props={{
}}
  examples={[
[<><Code code={`<Card>
  <Code code={code['mono-1']} />
  <Hr />
  <Row variant="1|1|1">
    <code style={{color: code['hue-2']}}>function</code>
    <code style={{color: code['hue-3']}}>keyword</code>
    <code style={{color: code['hue-4']}}>string</code>
  </Row>
</Card>`} /><p>This example shows one of the values within the <code>code</code> object, and then
applies some of them to custom code components. Change the dark mode to see
the colors respond.</p>
</>,<Card>
  <Code code={code['mono-1']} />
  <Hr />
  <Row variant="1|1|1">
    <code style={{color: code['hue-2']}}>function</code>
    <code style={{color: code['hue-3']}}>keyword</code>
    <code style={{color: code['hue-4']}}>string</code>
  </Row>
</Card>],
  ]}
/>);
}, Lucide.Palette];

import {Card} from 'tinywidgets';
COMPONENT_ROUTES['component/Card'] = ['Card', () => {
return (<Api 
  type='COMPONENT'
  importLine="import {Card} from 'tinywidgets';"
  title='Card'
  comments={<><p>The <code>Card</code> component displays a simple rectangular container.</p>
</>}
  icon={Lucide.Square}
  params={{
props:<>The props for the component.</>,
}}
  props={{
className:<><p>An extra CSS class name for the component.</p>
</>,
children:<><p>The children of the component, that go inside the card.</p>
</>,
}}
  examples={[
[<><Code code={`<Card>
  <h1>Welcome</h1>
  <Hr />
  <p>We hope you enjoy TinyWidgets</p>
</Card>`} /><p>This example shows a simple card.</p>
</>,<Card>
  <h1>Welcome</h1>
  <Hr />
  <p>We hope you enjoy TinyWidgets</p>
</Card>],
  ]}
/>);
}, Lucide.Square];

import {useDark} from 'tinywidgets';
HOOK_ROUTES['hook/useDark'] = ['useDark', () => {
return (<Api 
  type='HOOK'
  importLine="import {useDark} from 'tinywidgets';"
  title='useDark'
  comments={<><p>The useDark hook returns whether the user is viewing the application in dark
mode.</p>
</>}
  icon={Lucide.SquareFunction}
  params={{
}}
  props={{
}}
  examples={[
[<><Code code={`<Card>
  Currently in {useDark() ? 'dark' : 'light'} mode
</Card>`} /><p>This example shows the hook returning the current mode.</p>
</>,<Card>
  Currently in {useDark() ? 'dark' : 'light'} mode
</Card>],
  ]}
/>);
}, Lucide.SquareFunction];

import {App} from 'tinywidgets';
COMPONENT_ROUTES['component/App'] = ['App', () => {
return (<Api 
  type='COMPONENT'
  importLine="import {App} from 'tinywidgets';"
  title='App'
  comments={<><p>The <code>App</code> component is the root component of a TinyWidgets application.</p>
<p>It can be provided with optional components for different parts of the app
layout, including the top left title, the side bar and the main content.</p>
<p>If none of these props are present, the TinyWidgets layout won&#39;t be used, but
you will still be able to enjoy its state management features, and any
components within it will be correctly styled.</p>
</>}
  icon={Lucide.PanelsTopLeft}
  params={{
props:<>The props for the component.</>,
}}
  props={{
title:<><p>An optional component, element, or string which renders the top left title
of the application.</p>
</>,
topNavLeft:<><p>An optional component, element, or string which renders navigation on the
left side of the top navigation bar of the application.</p>
</>,
topNavRight:<><p>An optional component, element, or string which renders navigation on the
right side of the top navigation bar of the application.</p>
</>,
sideNav:<><p>An optional component, element, or string which renders the left side bar
of the application.</p>
</>,
main:<><p>An optional component, element, or string which renders the main part of
the application.</p>
</>,
className:<><p>An extra CSS class name for the component.</p>
</>,
}}
  examples={[
[<><Code code={`<App />`} /><p>This shows an empty App, but if you visit <a href="https://tinywidgets.org">the TinyWidgets
website</a> you&#39;ll see one in its full glory!</p>
</>,<App />],
  ]}
/>);
}, Lucide.PanelsTopLeft];

import {Code} from 'tinywidgets';
COMPONENT_ROUTES['component/Code'] = ['Code', () => {
return (<Api 
  type='COMPONENT'
  importLine="import {Code} from 'tinywidgets';"
  title='Code'
  comments={<><p>The <code>Code</code> component displays a block of pre-formatted code, and uses PrismJS
to parse its syntax. The coloring is based on the <a href="https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css">prism-one-dark</a> and <a href="https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-light.css">prism-one-light</a> themes.</p>
<p>This component supports the default PrismJS languages (<code>markup</code>, <code>html</code>
, <code>xml</code>, <code>svg</code>, <code>mathml</code>, <code>ssml</code>, <code>atom</code>, <code>rss</code>, <code>css</code>, <code>clike</code>, <code>javascript</code>
, <code>js</code>), and specific additional languages (<code>jsx</code>, <code>typescript</code>, <code>ts</code>, <code>tsx</code>).
Others can be added if there is demand! Please open an issue on GitHub.</p>
</>}
  icon={Lucide.SquareCode}
  params={{
props:<>The props for the component.</>,
}}
  props={{
code:<><p>The code to display, as a string.</p>
</>,
language:<><p>An optional indication of the language. Defaults to <code>jsx</code>.</p>
</>,
className:<><p>An extra CSS class name for the component.</p>
</>,
}}
  examples={[
[<><Code code={`<Code
  code={\`
import React from 'react';
const App = () => (
  <div>Hello, world!</div>
);
  \`}
/>`} /><p>This example shows a simple block of code, defaulting to the <code>jsx</code> language.</p>
</>,<Code
  code={`
import React from 'react';
const App = () => (
  <div>Hello, world!</div>
);
  `}
/>],
[<><Code code={`<Code
  code={\`
h1 {
  font-size: 1.5rem;
}
  \`}
  language="css"
/>`} /><p>This example shows the use of the <code>css</code> language.</p>
</>,<Code
  code={`
h1 {
  font-size: 1.5rem;
}
  `}
  language="css"
/>],
[<><Code code={`<Code
  code={\`
const a: number = 1;
  \`}
  language="typescript"
/>`} /><p>This example shows the use of the <code>tsx</code> language.</p>
</>,<Code
  code={`
const a: number = 1;
  `}
  language="typescript"
/>],
  ]}
/>);
}, Lucide.SquareCode];

import {Collapsible} from 'tinywidgets';
COMPONENT_ROUTES['component/Collapsible'] = ['Collapsible', () => {
return (<Api 
  type='COMPONENT'
  importLine="import {Collapsible} from 'tinywidgets';"
  title='Collapsible'
  comments={<><p>The <code>Collapsible</code> component displays a titled box that can be expanded or
collapsed. If the <code>id</code> prop is provided, its state is preserved between page
reloads.</p>
</>}
  icon={Lucide.PanelTopOpen}
  params={{
props:<>The props for the component.</>,
}}
  props={{
icon:<><p>An optional component which renders an icon for the top of the collapsible
component, and which must accept a className prop.</p>
</>,
title:<><p>An optional component, element, or string which renders the title of
the top of the component.</p>
</>,
titleRight:<><p>An optional component, element, or string which renders a second title
on the right side of the top of the component.</p>
</>,
startOpen:<><p>Whether the section should start opened up.</p>
</>,
id:<><p>An Id which will allow the state to be preserved between page reloads.</p>
</>,
className:<><p>An extra CSS class name for the component.</p>
</>,
children:<><p>The children of the component, that go inside the collapsible section.</p>
</>,
}}
  examples={[
[<><Code code={`<Collapsible
  title="TinyWidgets"
>
 <p>Peekaboo!</p>
</Collapsible>`} /><p>This example shows the basic Collapsible component.</p>
</>,<Collapsible
  title="TinyWidgets"
>
 <p>Peekaboo!</p>
</Collapsible>],
[<><Code code={`<Collapsible
  title="TinyWidgets"
  icon={Lucide.Grid3x3}
  startOpen={true}
>
 <p>Already open</p>
</Collapsible>`} /><p>This example shows a Collapsible component with an icon and which starts
open.</p>
</>,<Collapsible
  title="TinyWidgets"
  icon={Lucide.Grid3x3}
  startOpen={true}
>
 <p>Already open</p>
</Collapsible>],
[<><Code code={`<Collapsible
  title="TinyWidgets"
  id="example"
>
 <p>Reload the window</p>
</Collapsible>`} /><p>This example shows a Collapsible component where its state is preserved
between page reloads.</p>
</>,<Collapsible
  title="TinyWidgets"
  id="example"
>
 <p>Reload the window</p>
</Collapsible>],
  ]}
/>);
}, Lucide.PanelTopOpen];

import {Metric} from 'tinywidgets';
COMPONENT_ROUTES['component/Metric'] = ['Metric', () => {
return (<Api 
  type='COMPONENT'
  importLine="import {Metric} from 'tinywidgets';"
  title='Metric'
  comments={<><p>The <code>Metric</code> component displays a metric as a prominent numerical value with a
label above.</p>
</>}
  icon={Lucide.SquareSigma}
  params={{
props:<>The props for the component.</>,
}}
  props={{
icon:<><p>An optional component which renders an icon for the metric panel, and which
must accept a className prop.</p>
</>,
title:<><p>An optional component, element, or string which renders the title of
the metric panel.</p>
</>,
number:<><p>An optional component, element, or string which renders the number of
the metric panel.</p>
</>,
className:<><p>An extra CSS class name for the component.</p>
</>,
}}
  examples={[
[<><Code code={`<Metric
  icon={Lucide.ChartLine}
  title="Number"
  number="57"
/>`} /><p>This example shows the basic usage of the Metric component.</p>
</>,<Metric
  icon={Lucide.ChartLine}
  title="Number"
  number="57"
/>],
  ]}
/>);
}, Lucide.SquareSigma];

import {colors} from 'tinywidgets/css';
CSS_ROUTES['css/colors'] = ['colors', () => {
return (<Api 
  type='CSS'
  importLine="import {colors} from 'tinywidgets/css';"
  title='colors'
  comments={<><p>The <code>colors</code> object exposes the CSS variables used by TinyWidgets for color
theming, so that you can use them directly in your own application.</p>
<p>The full set of members is:</p>
<ul>
<li><code>accentHue</code></li>
<li><code>backgroundHue</code></li>
<li><code>accent</code></li>
<li><code>accentLight</code></li>
<li><code>accentHover</code></li>
<li><code>accentContrast</code></li>
<li><code>background</code></li>
<li><code>background2</code></li>
<li><code>backgroundHaze</code></li>
<li><code>backgroundHover</code></li>
<li><code>foreground</code></li>
<li><code>foregroundBright</code></li>
<li><code>foregroundDim</code></li>
<li><code>border</code></li>
<li><code>shadow</code></li>
</ul>
<p>You can use these variables directly in React components that take style
attributes, like this:</p>
<Code code={`<div style={{color: colors.accent}}>Accent</div>`} /><p>And if you are using Vanilla-Extract for your app&#39;s styles, use them in your
style declarations like this:</p>
<Code code={`export const titleStyle = style({color: colors.accent});`} /></>}
  icon={Lucide.Palette}
  params={{
}}
  props={{
}}
  examples={[
[<><Code code={`<Card>
  <Code code={colors.accentHue} />
  <Hr />
  <div style={{
    color: colors.accent,
    background: colors.background2,
    border: colors.border,
    boxShadow: colors.shadow,
    textAlign: 'center',
  }}>
    Accent on a background
  </div>
</Card>`} /><p>This example shows one of the values within the <code>colors</code> object, and then
applies some of them to a custom component. Change the dark mode to see the
background respond.</p>
</>,<Card>
  <Code code={colors.accentHue} />
  <Hr />
  <div style={{
    color: colors.accent,
    background: colors.background2,
    border: colors.border,
    boxShadow: colors.shadow,
    textAlign: 'center',
  }}>
    Accent on a background
  </div>
</Card>],
  ]}
/>);
}, Lucide.Palette];

import {Tag} from 'tinywidgets';
COMPONENT_ROUTES['component/Tag'] = ['Tag', () => {
return (<Api 
  type='COMPONENT'
  importLine="import {Tag} from 'tinywidgets';"
  title='Tag'
  comments={<><p>The <code>Tag</code> component displays a small rectangular tag, suitable for minimal
amounts of metadata, such as a notification count.</p>
</>}
  icon={Lucide.RectangleEllipsis}
  params={{
props:<>The props for the component.</>,
}}
  props={{
icon:<><p>An optional component which renders an icon for the tag, and which
must accept a className prop.</p>
</>,
title:<><p>An optional component, element, or string which renders the title of
the tag.</p>
</>,
variant:<><p>A variant of the tag, one of:</p>
<ul>
<li><code>default</code></li>
<li><code>accent</code></li>
</ul>
</>,
alt:<><p>Alternative text shown when the user hovers over the component.</p>
</>,
className:<><p>An extra CSS class name for the component.</p>
</>,
}}
  examples={[
[<><Code code={`<Tag
  title="TinyWidgets"
/>`} /><p>This example shows the <code>default</code> variant of the Tag component.</p>
</>,<Tag
  title="TinyWidgets"
/>],
[<><Code code={`<Tag
  title="57"
  variant="accent"
  icon={Lucide.Bell}
  alt="You have lots of notifications"
/>`} /><p>This example shows the <code>accent</code> variant of the Tag component with an icon.</p>
</>,<Tag
  title="57"
  variant="accent"
  icon={Lucide.Bell}
  alt="You have lots of notifications"
/>],
  ]}
/>);
}, Lucide.RectangleEllipsis];

import {useRoute} from 'tinywidgets';
HOOK_ROUTES['hook/useRoute'] = ['useRoute', () => {
return (<Api 
  type='HOOK'
  importLine="import {useRoute} from 'tinywidgets';"
  title='useRoute'
  comments={<><p>The useRoute hook returns the current route, assuming the app is using the
basic TinyWidgets routing system.</p>
<p>This &#39;system&#39; simply involves using this hook to get a string which may have
been persisted to the hash part of the browser&#39;s URL.</p>
</>}
  icon={Lucide.SquareFunction}
  params={{
}}
  props={{
}}
  examples={[
[<><Code code={`<Card>
  Current route
  <Hr />
  <code>{useRoute()}</code>
</Card>`} /><p>This example shows the hook returning the current route.</p>
</>,<Card>
  Current route
  <Hr />
  <code>{useRoute()}</code>
</Card>],
  ]}
/>);
}, Lucide.SquareFunction];

import {useSetRouteCallback} from 'tinywidgets';
HOOK_ROUTES['hook/useSetRouteCallback'] = ['useSetRouteCallback', () => {
const setRoute = useSetRouteCallback();
return (<Api 
  type='HOOK'
  importLine="import {useSetRouteCallback} from 'tinywidgets';"
  title='useSetRouteCallback'
  comments={<><p>The useSetRouteCallback hook a callback for setting the current route,
assuming the app is using the basic TinyWidgets routing system.</p>
<p>This &#39;system&#39; simply involves using this hook to set a string to be persisted
to the hash part of the browser&#39;s URL.</p>
</>}
  icon={Lucide.SquareFunction}
  params={{
}}
  props={{
}}
  examples={[
[<><Code code={`const setRoute = useSetRouteCallback();
// ...
<Button
  icon={Lucide.Home}
  title="Home"
  onClick={() => setRoute('home')}
/>`} /><p>This example shows the hook returning a callback that will change the current
route when called as a click handler.</p>
</>,<Button
  icon={Lucide.Home}
  title="Home"
  onClick={() => setRoute('home')}
/>],
  ]}
/>);
}, Lucide.SquareFunction];

import {Row} from 'tinywidgets';
COMPONENT_ROUTES['component/Row'] = ['Row', () => {
return (<Api 
  type='COMPONENT'
  importLine="import {Row} from 'tinywidgets';"
  title='Row'
  comments={<><p>The <code>Row</code> component displays a row of &#39;cell&#39; components, with a number of
common variants representing the relative sizes of those cells within it.</p>
</>}
  icon={Lucide.Columns3}
  params={{
props:<>The props for the component.</>,
}}
  props={{
variant:<><p>A variant of the row, representing the relative &#39;cell&#39; sizes within it, one
of:</p>
<ul>
<li><code>1|1</code></li>
<li><code>1|2</code></li>
<li><code>2|1</code></li>
<li><code>1|1|1</code></li>
<li><code>1|3</code></li>
<li><code>3|1</code></li>
<li><code>1|1|1|1</code></li>
</ul>
</>,
className:<><p>An extra CSS class name for the component.</p>
</>,
children:<><p>The children of the component, each occupying one &#39;cell&#39;.</p>
</>,
}}
  examples={[
[<><Code code={`<Row>
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
</Row>`} /><p>This example shows the default <code>1|1</code> variant of the Row component.</p>
</>,<Row>
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
</Row>],
[<><Code code={`<Row variant="1|2">
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>2</div>
</Row>`} /><p>This example shows the <code>1|2</code> variant of the Row component.</p>
</>,<Row variant="1|2">
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>2</div>
</Row>],
[<><Code code={`<Row variant="2|1">
  <div style={{background: 'oklch(50% 0.11 0)'}}>2</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
</Row>`} /><p>This example shows the <code>2|1</code> variant of the Row component.</p>
</>,<Row variant="2|1">
  <div style={{background: 'oklch(50% 0.11 0)'}}>2</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
</Row>],
[<><Code code={`<Row variant="1|1|1">
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 120)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 240)'}}>1</div>
</Row>`} /><p>This example shows the <code>1|1|1</code> variant of the Row component.</p>
</>,<Row variant="1|1|1">
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 120)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 240)'}}>1</div>
</Row>],
[<><Code code={`<Row variant="1|3">
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>3</div>
</Row>`} /><p>This example shows the <code>1|3</code> variant of the Row component.</p>
</>,<Row variant="1|3">
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>3</div>
</Row>],
[<><Code code={`<Row variant="3|1">
  <div style={{background: 'oklch(50% 0.11 0)'}}>3</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
</Row>`} /><p>This example shows the <code>3|1</code> variant of the Row component.</p>
</>,<Row variant="3|1">
  <div style={{background: 'oklch(50% 0.11 0)'}}>3</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
</Row>],
[<><Code code={`<Row variant="1|1|1|1">
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 90)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 270)'}}>1</div>
</Row>`} /><p>This example shows the <code>1|1|1|1</code> variant of the Row component.</p>
</>,<Row variant="1|1|1|1">
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 90)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 270)'}}>1</div>
</Row>],
  ]}
/>);
}, Lucide.Columns3];

import {Hr} from 'tinywidgets';
COMPONENT_ROUTES['component/Hr'] = ['Hr', () => {
return (<Api 
  type='COMPONENT'
  importLine="import {Hr} from 'tinywidgets';"
  title='Hr'
  comments={<><p>The <code>Hr</code> component displays a styled horizontal rule.</p>
</>}
  icon={Lucide.Minus}
  params={{
props:<>The props for the component.</>,
}}
  props={{
className:<><p>An extra CSS class name for the component.</p>
</>,
}}
  examples={[
[<><Code code={`<Hr />`} /><p>This example shows the basic Hr component.</p>
</>,<Hr />],
  ]}
/>);
}, Lucide.Minus];

import {dimensions} from 'tinywidgets/css';
CSS_ROUTES['css/dimensions'] = ['dimensions', () => {
return (<Api 
  type='CSS'
  importLine="import {dimensions} from 'tinywidgets/css';"
  title='dimensions'
  comments={<><p>The <code>dimensions</code> object exposes the CSS variables used by TinyWidgets for
various sizes and lengths, so that you can use them directly in your own
application.</p>
<p>The full set of members is:</p>
<ul>
<li><code>logo</code></li>
<li><code>avatar</code></li>
<li><code>icon</code></li>
<li><code>padding</code></li>
<li><code>radius</code></li>
<li><code>sideNavWidth</code></li>
<li><code>topNavHeight</code></li>
</ul>
<p>You can use these variables directly in React components that take style
attributes, like this:</p>
<Code code={`<div style={{width: dimensions.logo, height: dimensions.logo}} />`} /><p>And if you are using Vanilla-Extract for your app&#39;s styles, use them in your
style declarations like this:</p>
<Code code={`export const logoStyle = style({
  width: dimensions.logo,
  height: dimensions.logo,
});`} /></>}
  icon={Lucide.Ruler}
  params={{
}}
  props={{
}}
  examples={[
[<><Code code={`<Card>
  <Code code={dimensions['logo']} />
  <Hr />
  <div style={{
    width: dimensions.logo,
    height: dimensions.logo,
    background: 'oklch(50% 0.11 0)',
  }}/>
</Card>`} /><p>This example shows one of the values within the <code>dimensions</code> object, and then
applies some of them to a custom component.</p>
</>,<Card>
  <Code code={dimensions['logo']} />
  <Hr />
  <div style={{
    width: dimensions.logo,
    height: dimensions.logo,
    background: 'oklch(50% 0.11 0)',
  }}/>
</Card>],
  ]}
/>);
}, Lucide.Ruler];

import {Button} from 'tinywidgets';
COMPONENT_ROUTES['component/Button'] = ['Button', () => {
return (<Api 
  type='COMPONENT'
  importLine="import {Button} from 'tinywidgets';"
  title='Button'
  comments={<><p>The <code>Button</code> component displays an button, with a number of common variants.</p>
</>}
  icon={Lucide.RectangleHorizontal}
  params={{
props:<>The props for the component.</>,
}}
  props={{
icon:<><p>An optional component which renders an icon for the button, and which
must accept a className prop.</p>
</>,
title:<><p>An optional component, element, or string which renders the title of
the button.</p>
</>,
titleRight:<><p>An optional component, element, or string which renders a second title
on the right side of the button.</p>
</>,
iconRight:<><p>An optional component which renders a second icon for the button, and
which must accept a className prop.</p>
</>,
onClick:<><p>A handler called when the user clicks on the button.</p>
</>,
variant:<><p>A variant of the button, one of:</p>
<ul>
<li><code>default</code></li>
<li><code>icon</code></li>
<li><code>accent</code></li>
<li><code>ghost</code></li>
<li><code>item</code></li>
</ul>
</>,
current:<><p>A flag that indicates that an <code>item</code> button is &#39;current&#39; and therefore
highlighted.</p>
</>,
href:<><p>A URL that can be used instead of an <code>onClick</code> to launch a new web
page, much like a link.</p>
</>,
alt:<><p>Alternative text shown when the user hovers over the button.</p>
</>,
className:<><p>An extra CSS class name for the component.</p>
</>,
}}
  examples={[
[<><Code code={`<Button
  title="TinyWidgets"
  onClick={() => alert('Clicked!')}
/>`} /><p>This example shows the <code>default</code> variant of the Button component.</p>
</>,<Button
  title="TinyWidgets"
  onClick={() => alert('Clicked!')}
/>],
[<><Code code={`<Button
  title="TinyWidgets"
  icon={Lucide.Grid3x3}
/>`} /><p>This example shows the <code>default</code> variant of the Button component with a left
icon.</p>
</>,<Button
  title="TinyWidgets"
  icon={Lucide.Grid3x3}
/>],
[<><Code code={`<Button
  title="TinyWidgets"
  iconRight={Lucide.LogIn}
/>`} /><p>This example shows the <code>default</code> variant of the Button component with a right
icon.</p>
</>,<Button
  title="TinyWidgets"
  iconRight={Lucide.LogIn}
/>],
[<><Code code={`<Button
  icon={Lucide.Sun}
  variant="icon"
/>`} /><p>This example shows the <code>icon</code> variant of the Button component. It is best
used without a title.</p>
</>,<Button
  icon={Lucide.Sun}
  variant="icon"
/>],
[<><Code code={`<Button
  title="TinyWidgets"
  variant="accent"
/>`} /><p>This example shows the <code>accent</code> variant of the Button component.</p>
</>,<Button
  title="TinyWidgets"
  variant="accent"
/>],
[<><Code code={`<Button
  title="tinybase.org"
  iconRight={Lucide.SquareArrowOutUpRight}
  variant="accent"
  href="https://tinybase.org"
/>`} /><p>This example shows the <code>accent</code> variant of the Button component with an icon,
and that launches a new link.</p>
</>,<Button
  title="tinybase.org"
  iconRight={Lucide.SquareArrowOutUpRight}
  variant="accent"
  href="https://tinybase.org"
/>],
[<><Code code={`<Button
  title="TinyWidgets"
  variant="ghost"
/>`} /><p>This example shows the <code>ghost</code> variant of the Button component.</p>
</>,<Button
  title="TinyWidgets"
  variant="ghost"
/>],
[<><Code code={`<Button
  variant="item"
  icon={Lucide.Grid3x3}
  title="TinyWidgets"
  titleRight={<i>4</i>}
  iconRight={Lucide.CircleHelp}
/>`} /><p>This example shows the <code>item</code> variant of the Button component with both left
and right titles and icons. This is suitable for use as a link in a
navigational list, such as a side bar.</p>
</>,<Button
  variant="item"
  icon={Lucide.Grid3x3}
  title="TinyWidgets"
  titleRight={<i>4</i>}
  iconRight={Lucide.CircleHelp}
/>],
[<><Code code={`<Button
  variant="item"
  icon={Lucide.Grid3x3}
  title="TinyWidgets"
  current={true}
/>`} /><p>This example shows the <code>item</code> variant of the Button component, marked as
&#39;current&#39;.</p>
</>,<Button
  variant="item"
  icon={Lucide.Grid3x3}
  title="TinyWidgets"
  current={true}
/>],
  ]}
/>);
}, Lucide.RectangleHorizontal];

import {screens} from 'tinywidgets/css';
CSS_ROUTES['css/screens'] = ['screens', () => {
return (<Api 
  type='CSS'
  importLine="import {screens} from 'tinywidgets/css';"
  title='screens'
  comments={<><p>The <code>screens</code> object contains the media query breakpoints that TinyWidget
uses to distinguish small, medium, and large screens.</p>
<p>Currently, the main impact of the <code>large</code> member is that screens narrower
than this number of pixels will get a collapsed side bar. Screens narrower
than the <code>small</code> number of pixels will get a slightly smaller font.</p>
</>}
  icon={Lucide.Ruler}
  params={{
}}
  props={{
}}
  examples={[
[<><Code code={`<Code code={JSON.stringify(screens, null, 2)} />`} /><p>This example gets the breakpoint values.</p>
</>,<Code code={JSON.stringify(screens, null, 2)} />],
  ]}
/>);
}, Lucide.Ruler];

import {Detail} from 'tinywidgets';
COMPONENT_ROUTES['component/Detail'] = ['Detail', () => {
return (<Api 
  type='COMPONENT'
  importLine="import {Detail} from 'tinywidgets';"
  title='Detail'
  comments={<><p>The <code>Detail</code> component displays a set of key-value pairs in a two-column
table.</p>
</>}
  icon={Lucide.Table}
  params={{
props:<>The props for the component.</>,
}}
  props={{
data:<><p>The data to display in the detail table. The values can be any React node.</p>
</>,
className:<><p>An extra CSS class name for the component.</p>
</>,
}}
  examples={[
[<><Code code={`<Detail
 data={{
   normal: 'lorem ipsum',
   italic: <i>lorem ipsum</i>,
   underline: <u>lorem ipsum</u>,
 }}
/>`} /><p>This example shows the basic Collapsible component.</p>
</>,<Detail
 data={{
   normal: 'lorem ipsum',
   italic: <i>lorem ipsum</i>,
   underline: <u>lorem ipsum</u>,
 }}
/>],
  ]}
/>);
}, Lucide.Table];
Object.assign(ROUTES, COMPONENT_ROUTES, HOOK_ROUTES, 
FUNCTION_ROUTES, CSS_ROUTES, OBJECT_ROUTES);