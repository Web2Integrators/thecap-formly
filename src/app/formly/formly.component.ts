import { Component, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyService } from '../ui-form/formly.service';
import { PerfumeAfterViewInit } from 'perfume.js/angular';
import { perfume, TIMERS } from '../../perfume';
import { CountersService } from '../counters.service';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  providers: [ FormlyService ]
})
@PerfumeAfterViewInit('FormlyComponent')
export class FormlyComponent implements AfterViewInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[] = [
    ...this.formlyService.getDefaultForm()
  ];
  public model = {}
  public firstInteraction = false;
  public startFilling = false;

  constructor(private formlyService: FormlyService, private counters: CountersService) {}

  ngAfterViewInit() {
    perfume.getInstance().start(TIMERS.get('FormlyComponentFI'));
  }

  public submit() {
    console.log(this.model);
    perfume.getInstance().end(TIMERS.get('FillForm'));
  }

  public switchForm(id) {
    this.model = {};
    this.fields = this.formlyService.getFormById(id);
  }
  
  public interactionWithFormly() {
    if (!this.firstInteraction) {
      perfume.getInstance().end(TIMERS.get('FormlyComponentFI'));
      this.firstInteraction = true;
    }
  }

  public modelChange(e) {
    if (!this.startFilling) {
      perfume.getInstance().start(TIMERS.get('FillForm'));
      this.startFilling = true;
    } 
  }
}