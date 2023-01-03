import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import Token from '@app/shared/interfaces/token.interface';
import InjectorService from '@app/shared/services/injector/injector.service';
import { of } from 'rxjs';
import AuthService from '../shared/services/auth.service';

import Component from './login.component';

describe('LoginComponent', () => {
  let component: Component;
  let fixture: ComponentFixture<Component>;
  let authService: AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Component],
      imports:[
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    InjectorService.set(TestBed.inject(Injector));
    fixture = TestBed.createComponent(Component);
    authService = TestBed.inject(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('attempt should create call attemptLogin', () => {
    const token: Token = {
      access_token: '123',
      refresh_token: '123',
    };
    component.form.patchValue({
      username: '123',
      password: '123',
    });
    const attemptLoginSpy = spyOn(authService, 'attemptLogin').and.callFake(()=> of(token))
    component.attempt();
    expect(attemptLoginSpy).toHaveBeenCalled();
  });
});
