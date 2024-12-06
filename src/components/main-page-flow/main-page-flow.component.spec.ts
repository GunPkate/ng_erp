import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageFlowComponent } from './main-page-flow.component';

describe('MainPageFlowComponent', () => {
  let component: MainPageFlowComponent;
  let fixture: ComponentFixture<MainPageFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
