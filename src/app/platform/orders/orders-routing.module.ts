import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports
import OrdersComponent from './orders.component';

/**
 * Routes for Orders Module
 */
const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class OrdersRoutingModule {}
