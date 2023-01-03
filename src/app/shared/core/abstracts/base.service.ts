import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

// Imports
import InjectorService from '@services/injector/injector.service';
import FormsService from '@app/shared/services/forms/forms.service';
import Token from '@app/shared/interfaces/token.interface';

@Injectable({
  providedIn: 'root',
})
export default abstract class BaseService {
  /**
   * Provider for navigation
   */
  public router: Router;
  /**
   * Local Provider for http request
   */
  public formsService: FormsService;
  /**
   * token
   */
  private _token: Token | undefined;

  /**
   * token getter
   */
  public get token() {
    if (!this._token) {
      this._token = JSON.parse(localStorage.getItem('token') as string);
    }
    return this._token;
  }

  /**
   * token setter
   */
  set token(token: Token | undefined) {
    this._token = token;
  }

  /**
   * constructor:
   * inside we are injecting the services manually
   */
  constructor() {
    this.router = InjectorService.get(Router);
    this.formsService = InjectorService.get(FormsService);
  }

  /**
   * saveToken to set a new value for token
   * @param value
   */
  saveToken(value: Token) {
    this.token = value;
    localStorage.setItem('token', JSON.stringify(value));
  }

  /**
   * clearToken to clear token
   * @param value
   */
  clearToken() {
    this.token = undefined;
    localStorage.clear();
  }
}
