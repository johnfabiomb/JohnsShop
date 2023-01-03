import { ComponentFixture, TestBed } from '@angular/core/testing';

import Components from './bestsellers.component';

describe('BestsellersComponent', () => {
  let component: Components;
  let fixture: ComponentFixture<Components>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Components],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Components);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
