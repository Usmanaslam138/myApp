import { TestBed } from '@angular/core/testing';

import { ProteinfruitsService } from './proteinfruits.service';

describe('ProteinfruitsService', () => {
  let service: ProteinfruitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProteinfruitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
