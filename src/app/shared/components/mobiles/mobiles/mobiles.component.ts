import { Component, OnInit } from '@angular/core';
import { Imobiles } from '../../model/person';
import { mobileProducts } from '../mobiles';


@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
  public mobiles ! :Array<Imobiles>;
  
  public prodInfo :string='coupen';

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

 onClick(eve:Event){
  console.log(`clicked`)
  let target = eve.target as HTMLAnchorElement
  let value = target.getAttribute('data-id')!
 this.prodInfo=value
 }

}
