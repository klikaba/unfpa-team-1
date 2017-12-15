import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomepageComponent } from 'app/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'homepage', component: HomepageComponent
      }
    ])
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
