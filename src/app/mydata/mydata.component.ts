import { Component } from "@angular/core";

@Component({
  selector: "app-mydata",
  templateUrl: "./mydata.component.html",
  styleUrls: ["./mydata.component.css"],
})
export class MydataComponent {
  constructor() {}
  dyname: string = "talha";

  myMethod() {
    return "my channel name is " + this.dyname;
  }

  appStatus: boolean = true;
  title: string = "hello";
  isvalid: boolean = true;
  multiclassses = {
    class1: true,
    class2: true,
    class3: true,
  };
}
