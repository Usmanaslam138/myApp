import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-ngforpushsplice",
  templateUrl: "./ngforpushsplice.component.html",
  styleUrls: ["./ngforpushsplice.component.css"],
})
export class NgforpushspliceComponent {
  @ViewChild("myForm")
  myForm!: NgForm;
  user: string = "";
  uemail: string = "";
  defaultCourse = "HTML";
  defaultGender = "";
  formData: any = [];
  gender: any = [
    {
      id: 1,
      value: "Male",
    },
    {
      id: 2,
      value: "Female",
    },
  ];

  onSubmit(forms: NgForm) {
    this.formData.push({
      username: forms.value.userDetail.username,
      Email: forms.value.userDetail.email,
      course: forms.value.course,
      gender: forms.value.gender,
    });
    forms.reset();
    console.log(this.formData);
  }

  SetUsername() {
    this.myForm.form.patchValue({
      userDetail: {
        username: "Usman Khan",
      },
    });
  }
}
