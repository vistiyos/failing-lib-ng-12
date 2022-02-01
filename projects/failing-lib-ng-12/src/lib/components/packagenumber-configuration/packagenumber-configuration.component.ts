import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BaseI18nComponent } from '../base-i18n/base-i18n.component';
import { TranslateService } from '@ngx-translate/core';
import { OutletConfiguration } from '../../models/outlet.configuration';

@Component({
  selector: 'lib-packagenumber-configuration',
  templateUrl: './packagenumber-configuration.component.html',
  styleUrls: ['./packagenumber-configuration.component.scss']
})
export class PackagenumberConfigurationComponent extends BaseI18nComponent implements OnInit {
  scope: string = 'outlet';
  configuration: OutletConfiguration = null;
  private minInputLength: number = 4;
  private maxInputLength: number = 50;

  constructor(formBuilder: FormBuilder, translate: TranslateService) {
    super(formBuilder, translate);
  }

  additionalInitOperations() {
  }

  protected getFormControls(): { [p: string]: AbstractControl } {
    return {
      inputPackageNumber: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(this.minInputLength),
        Validators.maxLength(this.maxInputLength)
      ])),
    };
  }

  protected setNewStoreValue(newValue: any) {
  }
}
