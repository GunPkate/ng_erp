import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P03PurchaseComponent } from './p03-purchase.component';

describe('P03PurchaseComponent', () => {
  let component: P03PurchaseComponent;
  let fixture: ComponentFixture<P03PurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P03PurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P03PurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
