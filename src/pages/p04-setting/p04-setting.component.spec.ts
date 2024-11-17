import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P04SettingComponent } from './p04-setting.component';

describe('P04SettingComponent', () => {
  let component: P04SettingComponent;
  let fixture: ComponentFixture<P04SettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P04SettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P04SettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
