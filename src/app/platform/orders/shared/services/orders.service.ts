import { Injectable } from '@angular/core';

// Imports
import BaseService from '@app/shared/core/abstracts/base.service';
import endpoints from '@shared/endpoints';

@Injectable({
  providedIn: 'root',
})
export default class OrdersService extends BaseService {
  constructor() {
    super();
  }
  /**
   * getData
   * @param page page
   * @param q term to search
   * @returns dashboard data
   */
  getData = (page: number, q?: string) =>
    this.formsService.get(endpoints.orders, { params: { page, q } });
}
