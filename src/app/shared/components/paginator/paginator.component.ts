import { Component, Input, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Component for paginator
 */
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export default class PaginatorComponent {
  /**
   * total: total records
   */
  @Input() total: number = 0;

  /**
   * pageSize: number of records per page
   */
  @Input() pageSize = 5;

  /**
   * Template
   */
  @Input() public template!: TemplateRef<any>;

  /**
   * Page State: current page
   */
  @Input() public page$ = new BehaviorSubject<number>(1);

  /**
   * totalPages retunrs the total pages
   */
  get totalPages() {
    return Math.ceil(this.total / this.pageSize);
  }

  /**
   * nextPage: to go the next page
   * @param lastPage last Page Number
   */
  nextPage() {
    const currentPage = this.page$.value;
    if (currentPage < this.total / this.pageSize) {
      this.page$.next(currentPage + 1);
    }
  }

  /**
   * previousPage: to go the previous page
   */
  previousPage() {
    const currentPage = this.page$.value;
    if (currentPage > 1) {
      this.page$.next(currentPage - 1);
    }
  }
}
