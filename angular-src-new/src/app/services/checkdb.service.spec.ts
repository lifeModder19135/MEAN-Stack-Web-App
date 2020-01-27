/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckdbService } from './checkdb.service';

describe('CheckdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckdbService]
    });
  });

  it('should ...', inject([CheckdbService], (service: CheckdbService) => {
    expect(service).toBeTruthy();
  }));
});
