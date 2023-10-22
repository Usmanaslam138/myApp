import { Component } from "@angular/core";

@Component({
  selector: "app-pushsplice",
  templateUrl: "./pushsplice.component.html",
  styleUrls: ["./pushsplice.component.css"],
})
export class PushspliceComponent {
  PersonalInfo: any = [];

  getUserData(uname, umail) {
    if (uname.value == "" || umail.value == "") {
      alert("Input your Info First");
    } else {
      this.PersonalInfo.push({ UserName: uname.value, EmailId: umail.value });
      uname.value = "";
      umail.value = "";
    }
  }

  removeInfo(id) {
    this.PersonalInfo.splice(id, 1);
  }
}
