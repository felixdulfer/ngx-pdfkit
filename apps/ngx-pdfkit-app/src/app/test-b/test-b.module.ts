import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPdfkitModule } from '@felixdulfer/ngx-pdfkit';

import { TestBComponent } from './test-b.component';
import { TestBRoutingModule } from './test-b.routing.module';

@NgModule({
  declarations: [TestBComponent],
  imports: [CommonModule, TestBRoutingModule, NgxPdfkitModule.forChild()],
  exports: [TestBComponent],
})
export class TestBModule {}
