import { Component, Input, OnInit } from '@angular/core';

/**
 * John's Chart Component
 */
@Component({
  selector: 'johns-chart',
  templateUrl: './johns-chart.component.html',
  styleUrls: ['./johns-chart.component.scss'],
})
export default class JohnsChartComponent implements OnInit {
  /**
   * percentages to draw the chart
   */
  percentages: number[] = [];

  /**
   * data to create the chart
   */
  @Input() data: number[] = [];

  /**
   * labels to create the chart
   */
  @Input() labels: string[] = [];

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.renderChart();
  }

  /**
   * ngOnChanges: detecting changes
   */
  ngOnChanges(): void {
    this.renderChart();
  }

  /**
   * labels to create the chart
   */
  renderChart() {
    // first of all we get the major value
    const majorValue = Math.max(...this.data);
    // then generete the percentages based on the major value as 100% to calculate the chart
    this.percentages = this.data.map((res) =>
      Math.round((res * 100) / majorValue)
    );
  }
}
