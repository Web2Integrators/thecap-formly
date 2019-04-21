import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormlyComponent } from './formly/formly.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UiFormModule } from './ui-form/ui-form.module';
import { NgPerfume, PerfumeModule } from 'perfume.js/angular';
import { PERFUME_CONFIG } from '../perfume';
import { CountersService } from './counters.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpClientModule, 
    UiFormModule, 
    PerfumeModule.forRoot(PERFUME_CONFIG) 
  ],
  declarations: [ AppComponent, FormlyComponent, ReactiveFormComponent ],
  bootstrap: [ AppComponent ],
  providers: [ CountersService ]
})
export class AppModule { }
