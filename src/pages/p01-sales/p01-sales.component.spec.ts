import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P01SalesComponent } from './p01-sales.component';

describe('P01SalesComponent', () => {
  let component: P01SalesComponent;
  let fixture: ComponentFixture<P01SalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P01SalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P01SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
