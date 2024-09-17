import React from 'react';
import {Routes} from '..';
import {Code} from 'tinywidgets';
import {Component} from './Component';
export const COMPONENT_ROUTES: Routes = {};

import {Image} from 'tinywidgets';
COMPONENT_ROUTES['components/Image'] = ['Image', () => (<Component 
  title='Image'
  comments={<><p>The Image component displays an image, with a number of common variants.</p>
</>}
  props={{
src:<><p>The source of the image.</p>
</>,
title:<><p>A title shown when the user hovers over the component.</p>
</>,
onClick:<><p>A handler called when the user clicks on the component.</p>
</>,
variant:<><p>A common variant of the component, one of:</p>
<ul>
<li>default</li>
<li>logo</li>
<li>avatar</li>
<li>icon</li>
</ul>
</>,
className:<><p>An extra CSS class name for the component.</p>
</>,
}}
  examples={[
[<><Code code={`<Image
  src="/favicon.svg"
  title="TinyWidgets"
  onClick={() => alert('Clicked!')}
/>`} /><p>This example shows the <code>default</code> variant of the Image component.</p>
</>,<Image
  src="/favicon.svg"
  title="TinyWidgets"
  onClick={() => alert('Clicked!')}
/>],
[<><Code code={`<Image
  src="/favicon.svg"
  title="TinyWidgets"
  variant="logo"
/>`} /><p>This example shows the <code>logo</code> variant of the Image component.</p>
</>,<Image
  src="/favicon.svg"
  title="TinyWidgets"
  variant="logo"
/>],
[<><Code code={`<Image
  src="/favicon.svg"
  title="TinyWidgets"
  variant="avatar"
/>`} /><p>This example shows the <code>avatar</code> variant of the Image component.</p>
</>,<Image
  src="/favicon.svg"
  title="TinyWidgets"
  variant="avatar"
/>],
[<><Code code={`<Image
  src="/favicon.svg"
  title="TinyWidgets"
  variant="icon"
/>`} /><p>This example shows the <code>icon</code> variant of the Image component.</p>
</>,<Image
  src="/favicon.svg"
  title="TinyWidgets"
  variant="icon"
/>],
  ]}
/>)];

import {Button} from 'tinywidgets';
COMPONENT_ROUTES['components/Button'] = ['Button', () => (<Component 
  title='Button'
  comments={<><p>The Button component displays an button, with a number of common variants.</p>
</>}
  props={{
icon:<><p>A component which renders an icon for the button, and which must accept
a className prop.</p>
</>,
label:<></>,
labelRight:<></>,
iconRight:<></>,
onClick:<></>,
variant:<></>,
className:<></>,
href:<></>,
title:<></>,
current:<></>,
}}
  examples={[
[<><Code code={`<Button
  label="TinyWidgets"
  onClick={() => alert('Clicked!')}
/>`} /><p>This example shows the default variant of the Button component.</p>
</>,<Button
  label="TinyWidgets"
  onClick={() => alert('Clicked!')}
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
title:<><p>A component, element, or string which renders the top left title of the
app.</p>
</>,
topNavLeft:<><p>A component, element, or string which renders navigation on the left side
of the top navigation bar.</p>
</>,
topNavRight:<><p>A component, element, or string which renders navigation on the right side
of the top navigation bar.</p>
</>,
sideNav:<><p>A component, element, or string which renders the left side bar.</p>
</>,
main:<><p>A component, element, or string which renders the main part of the
application.</p>
</>,
}}
  examples={[
[<><Code code={`<App />`} /><p>This shows an empty App, but if you visit tinywidgets.org you&#39;ll see one in
its full glory!</p>
</>,<App />],
  ]}
/>)];