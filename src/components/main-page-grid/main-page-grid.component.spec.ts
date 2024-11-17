import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageGridComponent } from './main-page-grid.component';

describe('MainPageGridComponent', () => {
  let component: MainPageGridComponent;
  let fixture: ComponentFixture<MainPageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
