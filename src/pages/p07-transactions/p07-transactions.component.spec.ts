import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P07TransactionListComponent } from './p07-transactions.component';

describe('P07TransactionsComponent', () => {
  let component: P07TransactionListComponent;
  let fixture: ComponentFixture<P07TransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P07TransactionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P07TransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
