import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { HomepageComponent } from 'app/homepage/homepage.component';
import { DiseaseComponent } from 'app/disease/disease.component';
import { ContactComponent } from 'app/contact/contact.component';
import { PreventionComponent } from 'app/prevention/prevention.component';

import { CalculatorComponent } from 'app/calculator/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DiseaseComponent,
    PreventionComponent,
    CalculatorComponent,
    ContactComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { 
        path: '', redirectTo: '/homepage', pathMatch: 'full' 
      },
      {
        path: 'homepage', component: HomepageComponent
      },
      {
        path: 'disease', component: DiseaseComponent
      },
      {
        path: 'prevention', component: PreventionComponent
      },
      {
        path: 'calculator', component: CalculatorComponent
      },
      {
        path: 'contact', component: ContactComponent
      }
    ])
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
