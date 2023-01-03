import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Imports
import InjectorService from '@services/injector/injector.service';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HttpInterceptorClass from '@shared/core/interceptors/http.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorClass, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  /**
   * constructor
   * @param injector {Injector} service that allows us to inject services manually
   */
  constructor(private injector: Injector) {
    InjectorService.set(this.injector);
  }
}
