import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Imports
import { Bestseller } from '../../shared/interfaces/dashboard.interface';

/**
 * Component for Bestsellers
 */
@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss'],
})
export default class BestsellersComponent {
  /**
   * bestsellers array
   */
  @Input() records!: Bestseller[];
}
