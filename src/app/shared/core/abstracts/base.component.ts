import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Imports
import AppRoutes from '@shared/routes';
import InjectorService from '@app/shared/services/injector/injector.service';
import BaseService from './base.service';

/**
 * BaseComponent
 */
@Component({ template: '' })
export default abstract class BaseComponent implements OnDestroy {
  // subscriptions
  private subscriptions: Subscription = new Subscription();

  // Form
  public form!: FormGroup;

  // Provider for navigation
  public router: Router;

  // Provider to create forms
  public fb: FormBuilder;

  // Provider to create forms
  public _base: BaseService;

  constructor() {
    this.router = InjectorService.injector.get(Router);
    this.fb = InjectorService.injector.get(FormBuilder);
    this._base = InjectorService.injector.get(BaseService);
  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy() {}

  /**
   *  to get the routes of this app
   */
  get getAppRoutes() {
    return AppRoutes(this.router);
  }

  /**
   *  to get a control from a Form
   */
  getControl(control: string, form: FormGroup = this.form): AbstractControl {
    return form.controls[control];
  }
}
