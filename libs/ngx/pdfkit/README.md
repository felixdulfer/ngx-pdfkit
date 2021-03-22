# ngx-pdfkit

> Simple solution to load pdfkit into an Angular application.

## Usage

```console
npm install ngx-pdfkit pdfkit
```

In your `app.module.ts`, import `NgxPdfkitModule.forRoot()`

```ts
import { NgxPdfkitModule } from 'ngx-pdfkit';

@NgModule({
  // ...
  imports: [
    // ...
    BrowserModule,
    NgxPdfkitModule.forRoot({
      loadFromCdn: true,
    }),
  ],
  // ...
})
export class AppModule {}
```

Then use in your application:

```ts
export class TestAComponent implements OnInit {
  constructor(private readonly pdfService: PdfDocumentService) {}
  ngOnInit(): void {
    console.log(this.pdfService.doc);
  }
}
```

Note that `PdfDocumentService` instantiates a new PDFDocument each time the
service is injected.

## Options

### `loadFromCdn [boolean=true]`

Loads a prebuilt pdfkit standalone from [github.com/foliojs/pdfkit/releases](https://github.com/foliojs/pdfkit/releases).

## Nx

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test ngx-pdfkit` to execute the unit tests.

## To-Do

- [ ] Add option to load standalone pdfkit from assets.
- [ ] Add option to load standalone pdfkit during build.
