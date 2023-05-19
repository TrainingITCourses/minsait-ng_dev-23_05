import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivitiesService } from 'src/app/data/activities.service';
import {
  FormFeedbackService,
  hasErrors,
} from 'src/app/data/form-feedback.service';

@Component({
  selector: 'app-activity-new',
  templateUrl: './activity-new.component.html',
  styleUrls: ['./activity-new.component.css'],
})
export class ActivityNewComponent implements OnInit {
  form: FormGroup;
  ageCategories = this.activitiesService.getAgeCategories();
  private ffb = new FormFeedbackService();

  constructor(
    private activitiesService: ActivitiesService,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      title: ['Curso', [Validators.required, Validators.minLength(6)]],
      location: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      price: [99, [Validators.min(0), Validators.max(999)]],
      ageCategory: 'child',
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const newActivity = this.form.value;
    console.log('Form submitted!', newActivity);
    // this.activitiesService.postActivity();
  }

  hasErrors(fieldName: string): boolean {
    return hasErrors(this.form, fieldName);
  }

  getErrorMessage(fieldName: string): string {
    return this.ffb.getErrorMessage(this.form, fieldName);
  }
}
