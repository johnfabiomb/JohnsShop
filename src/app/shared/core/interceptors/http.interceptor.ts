import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  filter,
  Observable,
  switchMap,
  take,
  throwError,
} from 'rxjs';

// Imports
import AuthService from '@app/auth/shared/services/auth.service';
import BaseService from '../abstracts/base.service';
import endpoints from '@app/shared/endpoints';
import AppRoutes from '@app/shared/routes';

/**
 * Intercepts and handles an `HttpRequest` or `HttpResponse`.
 */
@Injectable()
export default class HttpInterceptorClass
  extends BaseService
  implements HttpInterceptor
{
  /**
   * to avoid refresh many times
   */
  private isRefreshing = false;

  /**
   * to return on handle401Error when the token is refreshing
   */
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  /**
   * constructor
   */
  constructor(private _auth: AuthService) {
    super();
  }

  /**
   * Identifies and handles a given HTTP request.
   * @param httpRequest
   * @param httpHandler
   * @returns
   */
  intercept(
    httpRequest: HttpRequest<any>,
    httpHandler: HttpHandler
  ): Observable<HttpEvent<boolean>> {
    let modifiedReq = httpRequest;
    const currentToken = this.token;
    let requestToken: string;

    if (!!currentToken?.access_token && !!currentToken?.refresh_token) {
      // valid if I am refreshing to know which token send
      requestToken = !modifiedReq.url.endsWith(endpoints.refresh)
        ? currentToken.access_token
        : currentToken.refresh_token;

      // the request with the authorization added
      modifiedReq = this.addTokenHeader(httpRequest, requestToken);
    } else {
      AppRoutes(this.router).auth.login.go();
    }

    return httpHandler.handle(modifiedReq).pipe(
      catchError((error) => {
        // If the url is not login and the error code is 401
        if (
          error instanceof HttpErrorResponse &&
          !modifiedReq.url.includes(endpoints.login) &&
          error.status === 401
        ) {
          return this.handle401Error(modifiedReq, httpHandler);
        } else {
          if (error.error.msg) {
            alert(error.error.msg);
          }
          this.clearToken();
          AppRoutes(this.router).auth.login.go();
        }

        return throwError(() => error);
      })
    );
  }

  /**
   * handle401Error: to handle the token refresh
   * @param request
   * @param next
   * @returns
   */
  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      const currentToken = this.token;

      if (currentToken?.access_token && currentToken?.refresh_token) {
        return this._auth.refreshToken(currentToken.refresh_token).pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;
            this.saveToken({
              ...token,
              refresh_token: currentToken.refresh_token,
            });
            this.refreshTokenSubject.next(token.access_token);
            return next.handle(
              this.addTokenHeader(request, token.access_token)
            );
          })
        );
      }
    }
    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }

  /**
   * addTokenHeader: to add the token to the headers
   * @param request
   * @param access_token
   * @returns
   */
  private addTokenHeader(request: HttpRequest<any>, access_token: string) {
    if (access_token)
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + access_token),
      });
    return request;
  }
}
