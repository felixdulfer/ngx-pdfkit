import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ngxPdfKitStandaloneCdnAppInitializerFactoryProvider } from './ngx-pdfkit-standalone-cdn.app-initializer.factory.provider';
import { pdfDocumentServiceFactoryProvider } from './pdf-document.service.factory.provider';

export interface NgxPdfKitConfigurationForRootOptions {
  loadFromCdn?: boolean;
}

@NgModule({
  imports: [CommonModule],
})
export class NgxPdfkitModule {
  static forRoot(
    options?: NgxPdfKitConfigurationForRootOptions
  ): ModuleWithProviders<NgxPdfkitModule> {
    const config: NgxPdfKitConfigurationForRootOptions = {
      loadFromCdn: true,
      ...options,
    };

    const providers: ModuleWithProviders<NgxPdfkitModule>['providers'] = [];

    if (config.loadFromCdn) {
      providers.push(ngxPdfKitStandaloneCdnAppInitializerFactoryProvider);
    }

    return {
      ngModule: NgxPdfkitModule,
      providers,
    };
  }

  static forChild(): ModuleWithProviders<NgxPdfkitModule> {
    const providers: ModuleWithProviders<NgxPdfkitModule>['providers'] = [];
    providers.push(pdfDocumentServiceFactoryProvider);
    return {
      ngModule: NgxPdfkitModule,
      providers,
    };
  }
}
