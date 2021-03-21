// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference types="pdfkit" />

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PdfDocumentService {
  PDFDocument: PDFKit.PDFDocument = window['PDFDocument'];
  doc = new this.PDFDocument();
}
