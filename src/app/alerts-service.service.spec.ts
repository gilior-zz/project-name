import { TestBed, inject } from '@angular/core/testing';

import { AlertsServiceService } from './alerts-service.service';

describe('AlertsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertsServiceService]
    });
  });

  it('should be created', inject([AlertsServiceService], (service: AlertsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
