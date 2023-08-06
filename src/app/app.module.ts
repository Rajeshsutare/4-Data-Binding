import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { FormsModule } from '@angular/forms';
import { StrDirComponent } from './shared/components/structural directive/str-dir/str-dir.component';
import { DirectiveComponent } from './shared/components/structural directive/directive/directive.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { MobilesComponent } from './shared/components/mobiles/mobiles/mobiles.component';
import { TabComponent } from './shared/components/tab/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StrDirComponent,
    DirectiveComponent,
    CardsComponent,
    MobilesComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
