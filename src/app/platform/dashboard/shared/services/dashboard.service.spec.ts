import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import FormsService from '@app/shared/services/forms/forms.service';
import InjectorService from '@app/shared/services/injector/injector.service';
import { of } from 'rxjs';

import Service from './dashboard.service';

describe('DashboardService', () => {
  let service: Service;
  let formsService: FormsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      teardown: { destroyAfterEach: true },
    });
    InjectorService.set(TestBed.inject(Injector));
    formsService = TestBed.inject(FormsService);
    service = TestBed.inject(Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getData should be call GET', () => {
    const getSpy = spyOn(formsService, 'get').and.callFake(() => of({}));
    service.getData();
    expect(getSpy).toHaveBeenCalled();
  });
});
