import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Directive()
export abstract class BaseI18nComponent implements OnInit {

  public loaded: boolean;
  public form: FormGroup;
  public scopeTranslations: any = {global: null, outlet: null};
  public defaultLabelTranslation: string;

  @Input() public scope: string;

  protected constructor(
    protected formBuilder: FormBuilder,
    protected translate: TranslateService,
  ) {
  }

  public ngOnInit(): void {
    this.form = new FormGroup(this.getFormControls());
    this.form.valueChanges.subscribe((val) => this.dataHasChanged(val));
    this.loadTranslations();
    this.additionalInitOperations();
  }

  /** Loads all the translations needed. */
  protected loadTranslations(): void {}

  /** Returns the form controls to be used in the view. */
  protected abstract getFormControls(): { [key: string]: AbstractControl };

  /** Execute additional operations during initialization. */
  protected additionalInitOperations() {}

  protected dataHasChanged(newValue: any): void {
    if (this.loaded) {
      this.setNewStoreValue(newValue);
    }
  }

  protected abstract setNewStoreValue(newValue: any): void;

}
