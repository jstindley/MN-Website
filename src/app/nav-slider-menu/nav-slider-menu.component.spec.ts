import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSliderMenuComponent } from './nav-slider-menu.component';

describe('NavSliderMenuComponent', () => {
  let component: NavSliderMenuComponent;
  let fixture: ComponentFixture<NavSliderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSliderMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSliderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
