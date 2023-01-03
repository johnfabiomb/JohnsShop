import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import InjectorService from '@app/shared/services/injector/injector.service';
import { of } from 'rxjs';

import Component from './dashboard.component';
import DashboardService from './shared/services/dashboard.service';
import getDataMock from './shared/test/dashbard.mock';

describe('DashboardComponent', () => {
  let component: Component;
  let fixture: ComponentFixture<Component>;
  let dashboardService: DashboardService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Component],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    InjectorService.set(TestBed.inject(Injector));
    fixture = TestBed.createComponent(Component);
    component = fixture.componentInstance;
    dashboardService = TestBed.inject(DashboardService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('data$ should call getData and map the data', () => {
  //     const dashboardGetDataSyp = spyOn(dashboardService,'getData').and.callFake(()=> {
  //       debugger
  //       return of(getDataMock)
  //     })
  //     component.data$.subscribe();
  //     debugger
  //     expect(dashboardGetDataSyp).toHaveBeenCalled();
  // });

  it('salesOverTimeMap should map the data for the chart', () => {
    const result = component.salesOverTimeMap(
      [{ orders: 1, total: 1 }],
      ['testing label']
    );
    expect(result.data).toEqual([1]);
    expect(result.labels).toEqual(['testing label']);
  });
});
