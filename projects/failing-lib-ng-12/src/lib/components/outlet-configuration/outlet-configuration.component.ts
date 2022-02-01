import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-xps-outlet-configuration',
  templateUrl: './outlet-configuration.component.html',
  styleUrls: ['./outlet-configuration.component.scss']
})
export class OutletConfigurationComponent implements OnDestroy {
  public subOutletID: string;
  public packageNumber: string;
  public invoiceCode: string;
  public user: string;

  private outletSubscription$: Subscription;

  public init: boolean;
  public userIsAuthorized: boolean;

  ngOnDestroy(): void {
    this.outletSubscription$.unsubscribe();
  }
}
