import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import Token from '@app/shared/interfaces/token.interface';
import FormsService from '@app/shared/services/forms/forms.service';
import InjectorService from '@app/shared/services/injector/injector.service';
import { of } from 'rxjs';
import Login from '../interfaces/login.interface';

import Service from './auth.service';

describe('AuthServiceService', () => {
  let service: Service;
  let formsService: FormsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    InjectorService.set(TestBed.inject(Injector));
    formsService = TestBed.inject(FormsService);
    service = TestBed.inject(Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('refreshToken should be call POST', () => {
    const token: Token = {
      access_token: '123',
      refresh_token: '123',
    };
    const refreshTokenSpy = spyOn(formsService, 'post').and.callFake(() =>
      of(token as Token)
    );
    service.refreshToken('token').subscribe();
    expect(refreshTokenSpy).toHaveBeenCalled();
  });

  it('attemptLogin should be call POST', () => {
    const data: Login = {
      username: '123',
      password: '123',
    };
    const attemptLoginSpy = spyOn(formsService, 'post').and.callFake(() =>
      of({})
    );
    service.attemptLogin(data).subscribe();
    expect(attemptLoginSpy).toHaveBeenCalled();
  });
});
