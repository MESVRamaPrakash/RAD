import { TestBed } from '@angular/core/testing';

import { ServicesearchbarService } from './servicesearchbar.service';

describe('ServicesearchbarService', () => {
  let service: ServicesearchbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesearchbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
