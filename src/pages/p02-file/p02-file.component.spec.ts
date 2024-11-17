import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P02FileComponent } from './p02-file.component';

describe('P02FileComponent', () => {
  let component: P02FileComponent;
  let fixture: ComponentFixture<P02FileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P02FileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P02FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
