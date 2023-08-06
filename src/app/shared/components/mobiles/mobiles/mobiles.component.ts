import { Component, OnInit } from '@angular/core';
import { Imobiles } from '../../model/person';
import { mobileProducts } from '../mobiles';


@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
  public prodInfo :string='1';
  public mobiles ! :Array<Imobiles>;
  public show = false;
  constructor() { }

  ngOnInit(): void {
    this.mobiles=mobileProducts;
  }
 alertMsg(){
  alert(`Product is added in your Card !!!`)
 }
 alertBuy(){
  alert(`Order placed Successfully !!!`)
 }

}
