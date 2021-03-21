import {
  APP_INITIALIZER,
  FactoryProvider,
  Injector,
  RendererFactory2,
} from '@angular/core';
import { ngxPdfKitStandaloneCdnAppInitializerFactory } from './ngx-pdfkit-standalone-cdn.app-initializer.factory';

/**
 * Provides the factory that initializes the application
 */
export const ngxPdfKitStandaloneCdnAppInitializerFactoryProvider: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: ngxPdfKitStandaloneCdnAppInitializerFactory,
  multi: true,
  deps: [RendererFactory2, Injector],
};
