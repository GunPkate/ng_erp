import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P00MainComponent } from './p00-main.component';

describe('P00MainComponent', () => {
  let component: P00MainComponent;
  let fixture: ComponentFixture<P00MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P00MainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P00MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
