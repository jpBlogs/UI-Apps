/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FiltersService } from './filters-service.service';

describe('Service: FiltersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiltersService]
    });
  });

  it('should ...', inject([FiltersService], (service: FiltersService) => {
    expect(service).toBeTruthy();
  }));
});
