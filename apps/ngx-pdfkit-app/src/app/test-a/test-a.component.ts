import { Component, OnInit } from '@angular/core';
import { PdfDocumentService } from '@felixdulfer/ngx-pdfkit';

@Component({
  selector: 'ngx-pdfkit-test-a',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.scss'],
})
export class TestAComponent implements OnInit {
  constructor(private readonly pdfService: PdfDocumentService) {
    console.log(pdfService);
  }
  ngOnInit(): void {
    console.log(this.pdfService.doc);
  }
}
