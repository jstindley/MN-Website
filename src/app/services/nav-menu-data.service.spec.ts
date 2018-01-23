import { TestBed, inject } from '@angular/core/testing';

import { NavMenuDataService } from './nav-menu-data.service';

describe('NavMenuDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavMenuDataService]
    });
  });

  it('should be created', inject([NavMenuDataService], (service: NavMenuDataService) => {
    expect(service).toBeTruthy();
  }));
});
