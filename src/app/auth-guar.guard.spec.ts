import { TestBed } from '@angular/core/testing';

import { AuthGuarGuard } from './auth-guar.guard';

describe('AuthGuarGuard', () => {
  let guard: AuthGuarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
