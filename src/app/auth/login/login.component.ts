import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

// Imports
import BaseComponent from '@app/shared/core/abstracts/base.component';
import AuthService from '../shared/services/auth.service';

/**
 * Component for Login
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent extends BaseComponent implements OnInit {
  constructor(private _auth: AuthService) {
    super();
  }

  ngOnInit(): void {
    // Init form
    this.form = this.fb.group({
      username: ['freddy', Validators.required],
      password: ['ElmStreet2019', Validators.required],
    });
  }

  /**
   * attempt: to valid the form and send if it is valid
   */
  attempt() {
    if (this.form.valid) {
      this._auth.attemptLogin(this.form.value).subscribe({
        next: (token) => {
          this._auth.saveToken(token);
          this.getAppRoutes.platform.dashboard.go();
        },
      });
    }
  }
}
