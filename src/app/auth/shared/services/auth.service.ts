import { Injectable } from '@angular/core';

// Imports
import BaseService from '@app/shared/core/abstracts/base.service';
import Login from '../interfaces/login.interface';
import endpoints from '@app/shared/endpoints';

@Injectable({
  providedIn: 'root',
})
export default class AuthService extends BaseService {
  constructor() {
    super();
  }
  /**
   * attemptLogin
   * @param data [Login] Login request data
   * @returns
   */
  attemptLogin = (data: Login) => this.formsService.post(data, endpoints.login);

  /**
   * Refresh token
   * @param token
   * @returns Observable
   */
  refreshToken(token: string) {
    return this.formsService.post({}, endpoints.refresh, {
      Headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
