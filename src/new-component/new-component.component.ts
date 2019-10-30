import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: require('./new-component.component.html')
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
