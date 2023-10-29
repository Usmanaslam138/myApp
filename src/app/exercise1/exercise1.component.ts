import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercise1",
  templateUrl: "./exercise1.component.html",
  styleUrls: ["./exercise1.component.css"],
})
export class Exercise1Component {
  adminList: any = [];
  userList: any = [];
  adminexitance: boolean = false;
  userexistence: boolean = false;
  usercount: number = 0;
  admincount: number = 0;

  onCreateAdmin(adminData) {
    this.adminList.push({ adminName: adminData });
    this.adminexitance = true;
    this.admincount = this.adminList.length;
  }

  onCreateUser(userData) {
    this.userList.push({ userName: userData });
    this.userexistence = true;
    this.usercount = this.userList.length;
  }

  userRemove(id) {
    if (this.userList.length < 2) {
      this.userList.splice(id, 1);
      this.userexistence = false;
      this.usercount = this.userList.length;
    } else {
      this.userList.splice(id, 1);
      this.usercount = this.userList.length;
    }
  }

  adminRemove(id) {
    if (this.adminList.length < 2) {
      this.adminList.splice(id, 1);
      this.adminexitance = false;
      this.admincount = this.adminList.length;
    } else {
      this.adminList.splice(id, 1);
      this.admincount = this.adminList.length;
    }
  }
}
