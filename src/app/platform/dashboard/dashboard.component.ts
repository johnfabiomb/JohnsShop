import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';

// Imports
import BaseComponent from '@app/shared/core/abstracts/base.component';
import DashboardService from './shared/services/dashboard.service';
import RenueveChartComponent from '../../shared/components/johns-chart/johns-chart.component';
import { SalesOverTime } from './shared/interfaces/dashboard.interface';
import { weekLabels, yearLabels } from './shared/chart.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export default class DashboardComponent extends BaseComponent {
  /**
   * data$: get dashboard data
   */
  data$ = this._dashboard.getData().pipe(
    take(1),
    map((data) => {
      // mapping the data for the John's chart
      const weekChartData = this.salesOverTimeMap(
        data.dashboard.sales_over_time_week,
        weekLabels
      );

      // mapping the data for the John's chart
      const yearChartData = this.salesOverTimeMap(
        data.dashboard.sales_over_time_year as [],
        yearLabels
      );
      return { ...data.dashboard, weekChartData, yearChartData };
    })
  );

  /**
   * chartToggle$: Observable to control the toggle
   */
  chartToggle$ = new BehaviorSubject<boolean>(false);

  constructor(private _dashboard: DashboardService) {
    super();
  }

  /**
   * salesOverTimeMap maps the data for the John's Chart
   */
  salesOverTimeMap = (SOTdata: SalesOverTime[], labels: string[]) => ({
    data: Object.values(SOTdata).map((res) => res.orders),
    labels: labels,
  });
}
