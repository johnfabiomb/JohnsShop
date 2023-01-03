import { Component } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  Observable,
  of,
  switchMap,
  take,
} from 'rxjs';

// Imports
import OrderPaginator from './shared/interfaces/order-paginator.interface';
import OrdersService from './shared/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export default class OrdersComponent {
  /**
   * Page State: current page
   */
  public page$ = new BehaviorSubject<number>(1);

  /**
   * search State: current page
   */
  private search$ = new BehaviorSubject<string>('');

  /**
   * data$: To get the  order data
   */
  data$: Observable<OrderPaginator> = this.search$.pipe(
    // waiting for the user to finish typing
    debounceTime(500),
    switchMap((search) => {
      //updating the page when search state changes
      this.page$.next(1);

      // Combine the search term with page state
      return combineLatest({
        q: of(search),
        page: this.page$,
      });
    }),
    // swiching for the http rquest
    switchMap(({ page, q }) => this._orders.getData(page, q).pipe(take(1)))
  );

  /**
   * constructor
   * @param _orders Order Service
   */
  constructor(public _orders: OrdersService) {}

  /**
   * data$: To get the  order data
   */
  search(term: string) {
    this.search$.next(term);
  }
}
