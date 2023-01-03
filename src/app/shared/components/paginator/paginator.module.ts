import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import PaginatorComponent from './paginator.component';

/**
 * Paginator Module
 */
@NgModule({
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
  imports: [CommonModule],
})
export default class PaginatorModule {}
