/* eslint-disable import/no-unresolved */
// `prismjs` ships classic scripts that expect a real global `Prism`.
// @ts-expect-error prismjs asset url import
import prismCoreUrl from 'prismjs/components/prism-core.js?url';
// @ts-expect-error prismjs asset url import
import prismMarkupUrl from 'prismjs/components/prism-markup.js?url';
// @ts-expect-error prismjs asset url import
import prismClikeUrl from 'prismjs/components/prism-clike.js?url';
// @ts-expect-error prismjs asset url import
import prismJavascriptUrl from 'prismjs/components/prism-javascript.js?url';
// @ts-expect-error prismjs asset url import
import prismCssUrl from 'prismjs/components/prism-css.js?url';
// @ts-expect-error prismjs asset url import
import prismJsxUrl from 'prismjs/components/prism-jsx.js?url';
// @ts-expect-error prismjs asset url import
import prismTypescriptUrl from 'prismjs/components/prism-typescript.js?url';
// @ts-expect-error prismjs asset url import
import prismTsxUrl from 'prismjs/components/prism-tsx.js?url';
// @ts-expect-error prismjs asset url import
import prismBashUrl from 'prismjs/components/prism-bash.js?url';

const loadScript = async (src: string) =>
  await new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript != null) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error(`Failed to load Prism script: ${src}`));
    document.head.appendChild(script);
  });

await loadScript(prismCoreUrl);
await loadScript(prismMarkupUrl);
await loadScript(prismClikeUrl);
await loadScript(prismJavascriptUrl);
await loadScript(prismCssUrl);
await loadScript(prismJsxUrl);
await loadScript(prismTypescriptUrl);
await loadScript(prismTsxUrl);
await loadScript(prismBashUrl);
