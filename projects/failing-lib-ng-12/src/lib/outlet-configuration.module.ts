import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { CommonModule, LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { OutletConfigurationComponent } from './components/outlet-configuration/outlet-configuration.component';
import { PackagenumberConfigurationComponent } from './components/packagenumber-configuration/packagenumber-configuration.component';
import { InvoicecodeConfigurationComponent } from './components/invoicecode-configuration/invoicecode-configuration.component';

// we want to wait for the translate service to have received the translations so that .instant works directly
export function InitTranslateServiceFactory(translate: TranslateService, injector: Injector): () => Promise<void> {
  return () => from(injector.get(LOCATION_INITIALIZED, Promise.resolve(null))).pipe(
    switchMap(() => {
      return translate.use('en');
    })
  ).toPromise();
}

// @dynamic // to prevent Angular Compiler Error https://github.com/ng-packagr/ng-packagr/issues/696#issuecomment-373487183
@NgModule({
  declarations: [
    OutletConfigurationComponent,
    PackagenumberConfigurationComponent,
    InvoicecodeConfigurationComponent
  ],
    imports: [
      CommonModule,
      FormsModule,
      TranslateModule.forChild({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient],
          },
      }),
      FormsModule,
      CheckboxModule,
      ReactiveFormsModule,
      ButtonModule,
      ProgressSpinnerModule,
    ],
  exports: [
    OutletConfigurationComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: InitTranslateServiceFactory,
      deps: [TranslateService, Injector],
      multi: true
    }
  ],
})
export class OutletConfigurationModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/outlet-configuration/i18n/');
}
