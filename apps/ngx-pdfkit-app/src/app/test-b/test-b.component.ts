import { Component, OnInit } from '@angular/core';
import { PdfDocumentService } from 'ngx-pdfkit';

@Component({
  selector: 'ngx-pdfkit-test-b',
  templateUrl: './test-b.component.html',
  styleUrls: ['./test-b.component.scss'],
})
export class TestBComponent implements OnInit {
  constructor(pdfService: PdfDocumentService) {
    console.log(pdfService);
  }
  ngOnInit(): void {
    const PDFDocument = window['PDFDocument'];
    console.log(PDFDocument);
  }
}
