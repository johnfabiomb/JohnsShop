import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import InjectorService from '@app/shared/services/injector/injector.service';

import Service from './base.service';

describe('OrdersService', () => {
  let service: Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    InjectorService.set(TestBed.inject(Injector));
    service = TestBed.inject(Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('token should return localstorage token', () => {
    localStorage.setItem('token', '{}');
    expect(service.token).toEqual(
      JSON.parse(localStorage.getItem('token') as any)
    );
  });
});
