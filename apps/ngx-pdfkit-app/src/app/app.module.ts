import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxPdfkitModule } from 'ngx-pdfkit';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxPdfkitModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
