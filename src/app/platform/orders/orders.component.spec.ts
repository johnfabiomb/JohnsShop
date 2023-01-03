import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import InjectorService from '@app/shared/services/injector/injector.service';

import Component from './orders.component';

describe('OrdersComponent', () => {
  let component: Component;
  let fixture: ComponentFixture<Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Component],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule
      ],
      teardown: { destroyAfterEach: true },
    }).compileComponents();
  });

  beforeEach(() => {
    InjectorService.set(TestBed.inject(Injector));
    fixture = TestBed.createComponent(Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search should set a value to search$', () => {
    component.search('asda')
    expect(component['search$'].value).toEqual('asda');
  });
});
