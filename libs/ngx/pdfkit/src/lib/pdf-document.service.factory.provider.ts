import { FactoryProvider } from '@angular/core';
import { PdfDocumentService } from './pdf-document.service';
import { pdfDocumentServiceFactory } from './pdf-document.service.factory';

export const pdfDocumentServiceFactoryProvider: FactoryProvider = {
  provide: PdfDocumentService,
  useFactory: pdfDocumentServiceFactory,
};
