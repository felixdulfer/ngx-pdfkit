# ngx-pdfkit

> Simple solution to load pdfkit into an Angular application, generated with
> [Nx](https://nx.dev).

Please note that this is not production ready. Continue at your own risk :).

## Usage

```console
npm install @felixdulfer/ngx-pdfkit pdfkit
```

In your `app.module.ts`, import `NgxPdfkitModule.forRoot()`

```ts
import { NgxPdfkitModule } from '@felixdulfer/ngx-pdfkit';

@NgModule({
  imports: [
    NgxPdfkitModule.forRoot({
      loadFromCdn: true,
    }),
  ],
})
export class AppModule {}
```

Make sure to include `NgxPdfkitModule.forChild()` in your application modules.

```ts
import { NgxPdfkitModule } from '@felixdulfer/ngx-pdfkit';

@NgModule({
  imports: [NgxPdfkitModule.forChild()],
})
export class MyModuleModule {}
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

See the [official `pdfkit` documentation](https://pdfkit.org) for more info on
how to use `pdfkit`.

## Options

### `loadFromCdn [boolean=true]`

Loads a prebuilt pdfkit standalone from [github.com/foliojs/pdfkit/releases](https://github.com/foliojs/pdfkit/releases).

## Why

Because importing pdfkit into an angular project requires a bit of hacking to
the angular build system to make sure that pdfkit will work in the browser. I've
created this simple solution to just load ngx-pdfkit as a dependency and be
done.

## To-Do

- [ ] Check for any issues with angular universal.
- [ ] Write some tests.
- [ ] Add option to load standalone pdfkit from assets.
- [ ] Add option to load standalone pdfkit during build.
- [ ] Implement ci/cd using either Gitlab CI/CD or Github actions.
