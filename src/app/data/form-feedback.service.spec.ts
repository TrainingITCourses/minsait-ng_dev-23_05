import { TestBed } from '@angular/core/testing';

import { FormFeedbackService } from './form-feedback.service';

describe('FormFeedbackService', () => {
  let service: FormFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
