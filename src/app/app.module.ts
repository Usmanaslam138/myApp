import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MydataComponent } from "./mydata/mydata.component";
import { EventComponent } from "./event/event.component";
import { TwowaybindingComponent } from "./twowaybinding/twowaybinding.component";
import { NgifelsethenComponent } from "./ngifelsethen/ngifelsethen.component";
import { NgforpushspliceComponent } from "./ngforpushsplice/ngforpushsplice.component";
import { PushspliceComponent } from "./pushsplice/pushsplice.component";
import { RoutingsComponent } from "./routings/routings.component";
import { Routes, RouterModule } from "@angular/router";
import { LoginpageComponent } from "./loginpage/loginpage.component";
import { Error404Component } from "./error404/error404.component";
import { HeasderComponent } from "./heasder/heasder.component";
import { ProductsComponent } from "./products/products.component";
import { NikeShoesComponent } from "./products/nike-shoes/nike-shoes.component";
import { AdidasshoesComponent } from "./products/adidasshoes/adidasshoes.component";
import { NgcontentComponent } from "./ngcontent/ngcontent.component";
import { BuyproductsComponent } from "./buyproducts/buyproducts.component";
import { ChildComponent } from "./child/child.component";
import { ProteinfruitsService } from "./appService/proteinfruits.service";
import { Exercise1Component } from "./exercise1/exercise1.component";
import { UserpanelComponent } from "./exercise1/userpanel/userpanel.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: RoutingsComponent },
  { path: "ngFor", component: NgforpushspliceComponent },
  { path: "ngIf, Else and then", component: NgifelsethenComponent },
  { path: "Push & Splice", component: PushspliceComponent },
  { path: "data binding", component: TwowaybindingComponent },
  { path: "login", component: LoginpageComponent },
  { path: "buyproducts", component: BuyproductsComponent },
  { path: "dashboard", component: Exercise1Component },
  {
    path: "products",
    component: ProductsComponent,
    children: [
      { path: "adidasShoes", component: AdidasshoesComponent },
      { path: "nikeshoes", component: NikeShoesComponent },
    ],
  },
  { path: "**", component: Error404Component },
];

@NgModule({
  declarations: [
    AppComponent,
    MydataComponent,
    EventComponent,
    TwowaybindingComponent,
    NgifelsethenComponent,
    NgforpushspliceComponent,
    PushspliceComponent,
    RoutingsComponent,
    LoginpageComponent,
    Error404Component,
    HeasderComponent,
    ProductsComponent,
    NikeShoesComponent,
    AdidasshoesComponent,
    NgcontentComponent,
    BuyproductsComponent,
    ChildComponent,
    Exercise1Component,
    UserpanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ProteinfruitsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
