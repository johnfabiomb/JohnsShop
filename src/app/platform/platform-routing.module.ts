import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports
import AppRoutes from '@app/shared/routes';
import PanelContainerComponent from '@app/template/panel-container/panel-container.component';

/**
 * Routes for Platform Module
 */
const routes: Routes = [
  {
    path: '',
    component: PanelContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: AppRoutes().platform.dashboard.main,
      },
      {
        path: AppRoutes().platform.dashboard.main,
        loadChildren: () =>
          import('@app/platform/dashboard/dashboard.module').then(
            (dashboard) => dashboard.default
          ),
      },
      {
        path: AppRoutes().platform.orders.main,
        loadChildren: () =>
          import('@app/platform/orders/orders.module').then(
            (orders) => orders.default
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class PlatformRoutingModule {}
