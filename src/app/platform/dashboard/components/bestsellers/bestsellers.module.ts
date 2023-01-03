import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import PaginatorModule from '@shared/components/paginator/paginator.module';
import BestsellersComponent from './bestsellers.component';

/**
 * Bestsellers Module
 */
@NgModule({
  declarations: [BestsellersComponent],
  exports: [BestsellersComponent],
  imports: [CommonModule, PaginatorModule],
})
export default class BestsellersModule {}
