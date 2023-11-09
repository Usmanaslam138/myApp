import { Component } from "@angular/core";
import { SubjectbehService } from "../subjectservice/subjectbeh.service";

@Component({
  selector: "app-subjectcom",
  templateUrl: "./subjectcom.component.html",
  styleUrls: ["./subjectcom.component.css"],
})
export class SubjectcomComponent {
  constructor(private _behvser: SubjectbehService) {
    this._behvser.userName.subscribe((uname) => {
      this.userName = uname;
    });
  }
  userName;
  inputValue = "Usman Khan";

  UpdateName(ivalue) {
    this.inputValue = ivalue.value;
  }
}
