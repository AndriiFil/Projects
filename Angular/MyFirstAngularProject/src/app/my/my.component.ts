import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MycomponentComponent implements OnInit {

  var1: any = 10;
  var2: any = '';
  hrefVar = 'http://www.google.com';
  inc = 0;

  constructor() { }

  ngOnInit() {
  }

  onMouseOver() {
    this.inc++;
    this.var2 = this.inc;
  }

}
