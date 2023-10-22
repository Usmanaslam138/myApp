import { Component } from "@angular/core";

@Component({
  selector: "app-ngifelsethen",
  templateUrl: "./ngifelsethen.component.html",
  styleUrls: ["./ngifelsethen.component.css"],
})
export class NgifelsethenComponent {
  isValid: boolean = false;

  createBlock() {
    if (this.isValid == true) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

  msg: string = "";
  onmsgshow: boolean = false;

  selectedProducts: string = "";

  getValue(item) {
    this.selectedProducts = item.target.value;
    this.onmsgshow = true;
  }
}
