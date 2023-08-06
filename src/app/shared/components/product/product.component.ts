import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit , OnDestroy{

  public productName:string='Iphone';
  public productModel:string='14 Pro Max';
  public ProductSkill:string='wide Camera';

  public isDisable:boolean=true;
  public isDisabled:boolean=true;

  public productId:number=111;

  public productStatus:string='No product Added Yet !!!';
  public cardCount:number=0;

  public searchProdName !:string;

  constructor() {
    console.log('Component constructor Product called')
   }


  ngOnInit(): void {
    console.log('Component Product initialised')
setTimeout(()=>{
// return this.isDisable=false;
return this.isDisable=!this.isDisable;
},2000);
    
}


getProductId(){
  return this.productId;
}


addProduct(){
 console.log('btn clicked!!!')
 this.isDisabled=false;
this.cardCount++;
 if(this.cardCount === 1){
 this.productStatus=`${this.cardCount} product is Added in Cart !!!`;
 }else{
  this.productStatus=`${this.cardCount} products are Added in Cart !!!`;
 }
}

removeProduct(){
  this.cardCount--;
  if(this.cardCount < 1){
    this.isDisabled=true;
    this.productStatus=`No product Added Yet !!!`
  }else{
    this.productStatus=`${this.cardCount} products are Added in Cart !!!`;
   }
}

productSearch(eve : Event){
  // console.log(eve.target.value)
  let val = (eve.target as HTMLInputElement).value;
  this.searchProdName=val;
}

ngOnDestroy(): void {
  throw new Error('Method not implemented.');
}
  
}






