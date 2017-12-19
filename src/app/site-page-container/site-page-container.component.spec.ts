import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePageContainerComponent } from './site-page-container.component';

describe('SitePageContainerComponent', () => {
  let component: SitePageContainerComponent;
  let fixture: ComponentFixture<SitePageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
