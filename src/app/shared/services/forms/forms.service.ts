import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { environment } from '@env';

/**
 * service to make http requests
 */
@Injectable({
  providedIn: 'root',
})
export default class FormsService {
  /** url base */
  url: string;

  /**
   * Constructor
   * @param http Angular http client
   */
  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  /**
   * Method for get resources
   * @param url
   * @param options
   * @returns Observable
   */
  get(url: string, options = {}): Observable<any> {
    return this.http.get(`${this.url}${url}`, options);
  }

  /**
   * Method for create resources
   * @param data
   * @param url
   * @param options
   * @returns Observable
   */
  post(data: any, url: string, options = {}): Observable<any> {
    return this.http.post(`${this.url}${url}`, data, options);
  }
}
