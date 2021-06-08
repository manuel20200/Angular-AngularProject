import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /* @Output() newvisibleEvent = new EventEmitter<string>(); */
  

  constructor() { }

  ngOnInit(): void {
  }

  /* newEvent(selector: string) {
    
    this.newvisibleEvent.emit(selector);
    console.log("header event");
  } */

}
