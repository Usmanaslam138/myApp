import { Component } from "@angular/core";
import { SubjectbehService } from "src/app/subjectservice/subjectbeh.service";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"],
})
export class Child1Component {
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
