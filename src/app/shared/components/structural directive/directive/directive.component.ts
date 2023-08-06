import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

public modelName:string='Iphone';
public modelNo:string='14 Pro Max';

public bgColor:string='hotpink';
public bgGray:string='#ccc';
 public isAvailable!:boolean;

  constructor() { }

  ngOnInit(): void {
    this.isAvailable=Math.random() >= .5 ?true :false;
  }

}
