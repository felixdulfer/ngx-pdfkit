import { Injectable } from '@angular/core';
import * as PDFKit from 'pdfkit';

@Injectable({
  providedIn: 'root',
})
export class PdfDocumentService {
  #PDFDocument = window['PDFDocument'];

  doc: PDFKit.PDFDocument = new this.#PDFDocument();
}
