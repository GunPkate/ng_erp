import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P05StockComponent } from './p05-stock.component';

describe('P05StockComponent', () => {
  let component: P05StockComponent;
  let fixture: ComponentFixture<P05StockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P05StockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P05StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
