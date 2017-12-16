import { Component, OnInit, Input } from '@angular/core';
import * as myGlobals from '../globals'

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: [ './calculator.component.css' ]
})
export class CalculatorComponent implements OnInit {
  isFinished = false;
  constructor() {}

  ngOnInit(): void {
    
  }

   handleChange1(point, isTrue) {
      myGlobals.setValue(point);
      if(isTrue === 1)
        this.isFinished = true;
    }

    handleChange(point) {
      myGlobals.setValue(point);
    }

    checkIsDone

}
