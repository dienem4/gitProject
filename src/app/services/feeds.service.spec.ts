import { TestBed } from '@angular/core/testing';

import { FeedsService } from './feeds.service';

describe('FeedsService', () => {
  let service: FeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedsService);
  });

  it('should be created', () => {
    service.requestByUrlt(service.url[0])
    expect(service).toBeTruthy();
  });
});
