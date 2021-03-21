import { DOCUMENT } from '@angular/common';
import { Injector, RendererFactory2 } from '@angular/core';
import { createScriptElement } from './tools/create-script';

export interface ScriptToLoad {
  src: string;
}

export type ScriptsToLoad = ScriptToLoad[];

export const scriptsToLoad: ScriptsToLoad = [
  {
    src:
      'https://github.com/foliojs/pdfkit/releases/download/v0.11.0/pdfkit.standalone.js',
  },
  {
    src:
      'https://github.com/devongovett/blob-stream/releases/download/v0.1.3/blob-stream.js',
  },
];

export const ngxPdfKitStandaloneCdnAppInitializerFactory = (
  render2Factory: RendererFactory2,
  injector: Injector
): (() => Promise<void>) => {
  console.log(`ngxPdfKitStandaloneCdnAppInitializerFactory`);
  const doc = injector.get(DOCUMENT);
  const renderer2 = render2Factory.createRenderer(null, null);
  const promises = scriptsToLoad.map(
    ({ src }) =>
      new Promise<void>((resolve, reject) =>
        createScriptElement(
          renderer2,
          {
            onload: () => resolve(),
            onerror: () => reject(),
            src,
          },
          doc
        )
      )
  );

  return () => Promise.all<void>(promises).then(() => undefined);
};
