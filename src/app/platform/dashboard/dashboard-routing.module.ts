import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports
import DashboardComponent from './dashboard.component';

/**
 * routes for Dashboard Module
 */
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class DashboardRoutingModule {}
