import { Component } from "@angular/core";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"],
})
export class EventComponent {
  msg: string = "";
  showPara() {
    this.msg = "Hello I am there";
  }

  onInput(event) {
    console.log(event.target.value);
  }

  msg1: string = "";

  addToCart(event) {
    this.msg1 = event.target.innerText + " Added to Cart";
  }

  getInfo(i) {
    console.log(i.value);
  }
}
