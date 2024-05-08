import { TestBed } from '@angular/core/testing';

import { MiaConnectionService } from './mia-connection.service';

describe('MiaConnectionService', () => {
  let service: MiaConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
