import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P06ReportsComponent } from './p06-reports.component';

describe('P06ReportsComponent', () => {
  let component: P06ReportsComponent;
  let fixture: ComponentFixture<P06ReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P06ReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P06ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
