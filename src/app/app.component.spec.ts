import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import Component from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Component],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
