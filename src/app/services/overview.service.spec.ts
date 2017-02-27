/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OverviewService } from './overview.service';

describe('OverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OverviewService]
    });
  });

  it('should ...', inject([OverviewService], (service: OverviewService) => {
    expect(service).toBeTruthy();
  }));
});
