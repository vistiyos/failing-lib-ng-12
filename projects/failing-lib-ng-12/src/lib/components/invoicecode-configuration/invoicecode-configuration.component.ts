import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {BaseI18nComponent} from '../base-i18n/base-i18n.component';
import {OutletConfiguration} from '../../models/outlet.configuration';

@Component({
  selector: 'lib-invoicecode-configuration',
  templateUrl: './invoicecode-configuration.component.html',
  styleUrls: ['./invoicecode-configuration.component.scss']
})
export class InvoicecodeConfigurationComponent extends BaseI18nComponent implements OnInit {
  scope: string = 'outlet';
  configuration: OutletConfiguration = null;
  private minInputLength: number = 1;
  private maxInputLength: number = 12;

  constructor(formBuilder: FormBuilder, translate: TranslateService) {
    super(formBuilder, translate);
  }

  additionalInitOperations() {
  }

  protected getFormControls(): { [p: string]: AbstractControl } {
    return {
      inputInvoiceCode: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(this.minInputLength),
        Validators.maxLength(this.maxInputLength)
      ])),
    };
  }

  protected setNewStoreValue(newValue: any) {
  }
}
