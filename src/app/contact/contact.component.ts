import { Component, OnInit, Input } from '@angular/core';
import * as myGlobals from '../globals'

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css' ]
})
export class ContactComponent implements OnInit {
  nothing=true;
  low=false;
  medium=false;
  high=false;

  constructor() {}

  ngOnInit(): void {
    
  }

  realCount = myGlobals.getValue();

}

