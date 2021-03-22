import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPdfkitModule } from '@felixdulfer/ngx-pdfkit';

import { TestAComponent } from './test-a.component';
import { TestARoutingModule } from './test-a.routing.module';

@NgModule({
  declarations: [TestAComponent],
  imports: [CommonModule, TestARoutingModule, NgxPdfkitModule.forChild()],
  exports: [TestAComponent],
})
export class TestAModule {}
