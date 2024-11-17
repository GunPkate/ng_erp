import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P07TransactionsComponent } from './p07-transactions.component';

describe('P07TransactionsComponent', () => {
  let component: P07TransactionsComponent;
  let fixture: ComponentFixture<P07TransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P07TransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P07TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
