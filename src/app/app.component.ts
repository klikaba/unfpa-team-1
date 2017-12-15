import { Component } from '@angular/core';
import { HomepageComponent } from 'app/homepage/homepage.component';
import { DiseaseComponent } from 'app/disease/disease.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome!';
  subtitle = 'powered by: Klika & UNFPA';
}
