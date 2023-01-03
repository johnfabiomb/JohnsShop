import { Injectable } from '@angular/core';

// Imports
import BaseService from '@app/shared/core/abstracts/base.service';
import endpoints from '@shared/endpoints';

/**
 * service for Dashbooard
 */
@Injectable({
  providedIn: 'root',
})
export default class DashboardService extends BaseService {
  constructor() {
    super();
  }
  /**
   * getData
   * @returns dashboard data
   */
  getData = () => this.formsService.get(endpoints.dashboard);
}
