import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLv1Component } from './form-lv1.component';

describe('FormLv1Component', () => {
  let component: FormLv1Component;
  let fixture: ComponentFixture<FormLv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLv1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
