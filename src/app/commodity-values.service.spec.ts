import { TestBed } from '@angular/core/testing';

import { CommodityValuesService } from './commodity-values.service';

describe('CommodityValuesService', () => {
  let service: CommodityValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommodityValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
