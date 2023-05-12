import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivitiesService } from 'src/app/data/activities.service';

@Component({
  selector: 'app-activity-new',
  templateUrl: './activity-new.component.html',
  styleUrls: ['./activity-new.component.css'],
})
export class ActivityNewComponent implements OnInit {
  form: FormGroup;
  ageCategories = this.activitiesService.getAgeCategories();

  constructor(
    private activitiesService: ActivitiesService,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      title: '',
      location: '',
      price: 99,
      ageCategory: 'child',
    });
  }

  ngOnInit(): void {
    //this.form = this.formBuilder.group({});
  }

  onSubmit() {
    const newActivity = this.form.value;
    console.log('Form submitted!', newActivity);
    // this.activitiesService.postActivity();
  }
}
