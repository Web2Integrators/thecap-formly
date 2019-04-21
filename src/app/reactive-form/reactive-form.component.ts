import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfumeAfterViewInit } from 'perfume.js/angular';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
})
@PerfumeAfterViewInit('ReactiveFormComponent')
export class ReactiveFormComponent implements OnInit, AfterViewInit {
  public form: FormGroup;
  public countries = [
    { label: 'Select your country', value: '' },
    { label: 'United States of America', value: 'USA' },
    { label: 'Colombia', value: 'COL' },
    { label: 'India', value: 'IND' }
  ];
  public model = [{}];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required]
    });
    this.form.valueChanges.subscribe((model) => {
      this.model = model;
      console.log(this.form.get('country'));
    });
  }

  ngAfterViewInit() {}

  public onSubmit() {
    console.log(this.model);
  }

}