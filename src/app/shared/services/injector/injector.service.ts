import { Injector } from '@angular/core';

/**
 * InjectorService allows us to inject services manually
 */
export default class InjectorService {
  static injector: Injector;
  static get(value: any) {
    return InjectorService.injector.get(value);
  }
  static set(value: Injector): void {
    InjectorService.injector = value;
  }
}
