import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxPdfkitModule } from '@felixdulfer/ngx-pdfkit';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgxPdfkitModule.forRoot({
      loadFromCdn: true,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
