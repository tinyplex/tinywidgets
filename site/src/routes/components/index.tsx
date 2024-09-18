import React from 'react';
import {Routes} from '..';
import {Code} from 'tinywidgets';
import {Component} from './Component';
import * as Lucide from 'lucide-react';
export const COMPONENT_ROUTES: Routes = {};

import {Row} from 'tinywidgets';
COMPONENT_ROUTES['components/Row'] = ['Row', () => (<Component 
  title='Row'
  comments={<><p>The Row component displays a row of &#39;cell&#39; components, with a number of
common variants representing the relative &#39;cell&#39; sizes within it.</p>
</>}
  props={{
variant:<><p>A variant of the row, representing the relative &#39;cell&#39; sizes within it, one
of:</p>
<ul>
<li>1|1</li>
<li>1|2</li>
<li>2|1</li>
<li>1|1|1</li>
<li>1|3</li>
<li>3|1</li>
<li>1|1|1|1</li>
</ul>
</>,
className:<><p>An extra CSS class name for the row.</p>
</>,
children:<><p>The children of the row, each occupying one &#39;cell&#39;</p>
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
/>)];

import {Image} from 'tinywidgets';
COMPONENT_ROUTES['components/Image'] = ['Image', () => (<Component 
  title='Image'
  comments={<><p>The Image component displays an image, with a number of common variants.</p>
</>}
  props={{
src:<><p>The source of the image.</p>
</>,
onClick:<><p>A handler called when the user clicks on the image.</p>
</>,
variant:<><p>A variant of the image, one of:</p>
<ul>
<li>default</li>
<li>logo</li>
<li>avatar</li>
<li>icon</li>
</ul>
</>,
className:<><p>An extra CSS class name for the image.</p>
</>,
alt:<><p>Alternative text shown when the user hovers over the image.</p>
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
/>)];

import {App} from 'tinywidgets';
COMPONENT_ROUTES['components/App'] = ['App', () => (<Component 
  title='App'
  comments={<><p>The App component is the root component of a TinyWidgets application.</p>
<p>It can be provided with optional components for different parts of the app
layout, including the top left title, the side bar and the main content.</p>
<p>If none of these props are present, the TinyWidgets layout won&#39;t be used, but
you will still be able to enjoy its state management features, and any
components within it will be correctly styled.</p>
</>}
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
}}
  examples={[
[<><Code code={`<App />`} /><p>This shows an empty App, but if you visit tinywidgets.org you&#39;ll see one in
its full glory!</p>
</>,<App />],
  ]}
/>)];

import {Button} from 'tinywidgets';
COMPONENT_ROUTES['components/Button'] = ['Button', () => (<Component 
  title='Button'
  comments={<><p>The Button component displays an button, with a number of common variants.</p>
</>}
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
<li>default</li>
<li>icon</li>
<li>accent</li>
<li>ghost</li>
<li>item</li>
</ul>
</>,
current:<><p>A flag that indicates that an <code>item</code> button is &#39;current&#39; and therefore
highlighted.</p>
</>,
href:<><p>A URL that can be used instead of an <code>onClick</code> to launch a new web
page, much like a link.</p>
</>,
className:<><p>An extra CSS class name for the button.</p>
</>,
alt:<><p>Alternative text shown when the user hovers over the button.</p>
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
/>)];