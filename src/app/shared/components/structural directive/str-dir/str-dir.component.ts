import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-dir',
  templateUrl: './str-dir.component.html',
  styleUrls: ['./str-dir.component.scss']
})
export class StrDirComponent implements OnInit {
  public name:string='Iphone';
  public modelNo:string='14Pro Max';
  public bgColor:string='orange';

  public bgGray:string ='#ccc'
  public  isAvailable !:boolean;

  constructor() { }

  ngOnInit(): void {
    this.isAvailable= Math.random() >=.5 ? true : false;
  }

}
