import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const navbar = fixture.componentInstance;
    expect(navbar).toBeTruthy();
  });

  it(`should have as title 'ng_erp'`, () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const navbar = fixture.componentInstance;
    expect(navbar.topic).toEqual('ng_erp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ng_erp app is running!');
  });
});
