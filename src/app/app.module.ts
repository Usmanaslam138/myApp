import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { SubjectcomComponent } from "./subjectcom/subjectcom.component";
import { Child1Component } from "./subjectcom/child1/child1.component";
import { Child2Component } from "./subjectcom/child2/child2.component";
import { SubjectbehService } from "./subjectservice/subjectbeh.service";
import { TestingComponent } from "./subjectcom/testing/testing.component";
import { ViewchildsComponent } from "./viewchilds/viewchilds.component";
import { Children1Component } from "./viewchilds/children1/children1.component";
import { TestingDirectiveDirective } from "./appDirectives/testing-directive.directive";
import { DropdowndDirective } from "./appDirectives/dropdownd.directive";
import { MyPipe } from "./cusompipe/my.pipe";
import { FilterPPipe } from "./cusompipe/filter-p.pipe";
import { CommonModule } from "@angular/common";

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
  { path: "subject", component: SubjectcomComponent },
  { path: "Practice", component: ViewchildsComponent },
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
    Child1Component,
    Child2Component,
    SubjectcomComponent,
    TestingComponent,
    ViewchildsComponent,
    Children1Component,
    TestingDirectiveDirective,
    DropdowndDirective,
    MyPipe,
    FilterPPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CommonModule,
  ],
  providers: [ProteinfruitsService, SubjectbehService],
  bootstrap: [AppComponent],
})
export class AppModule {}
