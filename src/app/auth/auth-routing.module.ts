import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import LoginComponent from './login/login.component';
import AuthContainerComponent from '@app/template/auth-container/auth-container.component';

/**
 * Routes for Auth Module
 */
const routes: Routes = [
  {
    path: '',
    component: AuthContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class AuthRoutingModule {}
