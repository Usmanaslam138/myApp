import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pushsplice",
  templateUrl: "./pushsplice.component.html",
  styleUrls: ["./pushsplice.component.css"],
})
export class PushspliceComponent {
  constructor(private router: Router) {}

  PersonalInfo: any = [];
  tableshow: boolean = false;

  getUserData(uname, umail) {
    if (uname.value == "" || umail.value == "") {
      alert("Input your Info First");
    } else {
      this.tableshow = true;
      this.PersonalInfo.push({ UserName: uname.value, EmailId: umail.value });
      uname.value = "";
      umail.value = "";
    }

    if (this.PersonalInfo.length > 3) {
      this.router.navigate(["products"]);
    }
  }

  removeInfo(id) {
    if (this.PersonalInfo.length < 2) {
      this.tableshow = false;
      this.PersonalInfo.splice(id, 1);
    } else {
      this.PersonalInfo.splice(id, 1);
    }
  }
}
