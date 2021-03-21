import { Component, OnInit } from '@angular/core';
import { PdfDocumentService } from 'ngx-pdfkit';

@Component({
  selector: 'ngx-pdfkit-test-a',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.scss'],
})
export class TestAComponent implements OnInit {
  constructor(pdfService: PdfDocumentService) {
    console.log(pdfService);
  }
  ngOnInit(): void {
    const PDFDocument = window['PDFDocument'];
    console.log(PDFDocument);
  }
}
