import { PdfDocumentService } from './pdf-document.service';

export const pdfDocumentServiceFactory = () => {
  console.log(`pdfDocumentServiceFactory`);
  return new PdfDocumentService();
};
