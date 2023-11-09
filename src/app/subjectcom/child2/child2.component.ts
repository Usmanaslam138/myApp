import { Component } from "@angular/core";
import { SubjectbehService } from "src/app/subjectservice/subjectbeh.service";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.css"],
})
export class Child2Component {
  constructor(private _behvser: SubjectbehService) {
    this._behvser.userName.subscribe((uname) => {
      this.userName = uname;
    });
  }
  userName;

  updateUserName(uname) {
    this._behvser.userName.next(uname.value);
  }
}
