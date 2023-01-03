import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports
import AppRoutes from '@shared/routes';

/**
 * Main routes
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@app/auth/auth.module').then((auth) => auth.default),
  },
  {
    path: AppRoutes().platform.main,
    loadChildren: () =>
      import('@app/platform/platform.module').then(
        (platform) => platform.default
      ),
  },
  {
    path: '**',
    redirectTo: AppRoutes().auth.login.main,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
