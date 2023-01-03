import { ComponentFixture, TestBed } from '@angular/core/testing';

import Component from './paginator.component';

describe('PaginatorComponent', () => {
  let component: Component;
  let fixture: ComponentFixture<Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('nextPage() and previousPage() should go the next and the previous page', () => {
    component.total = 1000;
    component.nextPage();
    expect(component.page$.value).toEqual(2);

    component.previousPage();
    expect(component.page$.value).toEqual(1);
  });
});
