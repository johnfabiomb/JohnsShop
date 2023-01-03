import { ComponentFixture, TestBed } from '@angular/core/testing';

import Components from './johns-chart.component';

describe('JohnChartComponent', () => {
  let component: Components;
  let fixture: ComponentFixture<Components>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Components],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Components);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('renderChart should be set percetages', () => {
    component.data = [10, 20];
    component.labels = ['minor', 'major'];
    component.ngOnChanges();
    expect(component.percentages[0]).toEqual(50);
    expect(component.percentages[1]).toEqual(100);
  });
});
