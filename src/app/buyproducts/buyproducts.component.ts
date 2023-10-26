import { Component } from "@angular/core";

@Component({
  selector: "app-buyproducts",
  templateUrl: "./buyproducts.component.html",
  styleUrls: ["./buyproducts.component.css"],
})
export class BuyproductsComponent {
  proselected: boolean = false;
  selProduct: string = "";
  ordersuccess: boolean = false;
  addedproduct: any;

  onSelectProduct(product) {
    this.selProduct = product;
    this.proselected = true;
  }

  oncheckout() {
    this.ordersuccess = true;
  }

  onAddedPro(event) {
    this.addedproduct = event;
  }
}
