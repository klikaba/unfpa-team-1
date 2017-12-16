import { Component } from '@angular/core';
import { HomepageComponent } from 'app/homepage/homepage.component';
import { DiseaseComponent } from 'app/disease/disease.component';
import * as myGlobals from './globals'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit(): void {
    myGlobals.setValue(0);
  }


}
