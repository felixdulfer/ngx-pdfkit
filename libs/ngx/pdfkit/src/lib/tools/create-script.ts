import { Renderer2 } from '@angular/core';

/**
 * Creates a script element
 */
export function createScriptElement(
  renderer2: Renderer2,
  attrs: { [key: string]: string | (() => void) },
  doc: Document
): HTMLScriptElement {
  const scriptElm = renderer2.createElement(`script`) as HTMLScriptElement;
  const attributes = { type: 'text/javascript', ...attrs };
  Object.keys(attributes).forEach((key) => (scriptElm[key] = attributes[key]));
  renderer2.appendChild(doc.body, scriptElm);
  return scriptElm;
}
