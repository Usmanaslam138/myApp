import { Component, OnInit } from "@angular/core";
import { ProteinfruitsService } from "../appService/proteinfruits.service";

@Component({
  selector: "app-twowaybinding",
  templateUrl: "./twowaybinding.component.html",
  styleUrls: ["./twowaybinding.component.css"],
})
export class TwowaybindingComponent {
  constructor(private _proteinRich: ProteinfruitsService) {}

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

  proteinfruitlist: any;
  ngOnInit() {
    // this.proteinfruitlist = this._proteinRich.proteinRichFruits;
    this._proteinRich
      .proteinRichFruits()
      .subscribe((productData) => (this.proteinfruitlist = productData));
  }
}
