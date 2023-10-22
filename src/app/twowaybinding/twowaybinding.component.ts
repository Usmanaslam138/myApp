import { Component } from "@angular/core";

@Component({
  selector: "app-twowaybinding",
  templateUrl: "./twowaybinding.component.html",
  styleUrls: ["./twowaybinding.component.css"],
})
export class TwowaybindingComponent {
  username: string = "";

  msg = {
    name: "usman",
    Address: "karachi",
    age: 123,
  };

  sas: any;
  change() {
    this.sas = this.msg.age;
  }
}
