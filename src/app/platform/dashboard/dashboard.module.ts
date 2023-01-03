import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import DashboardRoutingModule from './dashboard-routing.module';
import JohnsChartModule from '../../shared/components/johns-chart/johns-chart.module';
import BestsellersModule from './components/bestsellers/bestsellers.module';
import DashboardComponent from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BestsellersModule,
    JohnsChartModule,
  ],
})
export default class DashboardModule {}
