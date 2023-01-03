import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import PaginatorModule from '@app/shared/components/paginator/paginator.module';
import OrdersRoutingModule from './orders-routing.module';
import OrdersComponent from './orders.component';

/**
 * Orders Module
 */
@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, OrdersRoutingModule, PaginatorModule],
})
export default class OrdersModule {}
