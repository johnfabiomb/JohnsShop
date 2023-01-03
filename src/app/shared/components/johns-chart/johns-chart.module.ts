import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import
import JohnsChart from './johns-chart.component';

/**
 * John's Chart Module
 */
@NgModule({
  declarations: [JohnsChart],
  exports: [JohnsChart],
  imports: [CommonModule],
})
export default class JohnsChartModule {}
