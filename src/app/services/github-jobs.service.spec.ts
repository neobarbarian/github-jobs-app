import { TestBed } from '@angular/core/testing';

import { GithubJobsService } from './github-jobs.service';

describe('GithubJobsService', () => {
  let service: GithubJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
