import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-ngifelsethen",
  templateUrl: "./ngifelsethen.component.html",
  styleUrls: ["./ngifelsethen.component.css"],
})
export class NgifelsethenComponent implements OnInit {
  myReactiveForm!: FormGroup;
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

  // get skillsArray() {
  //   // return (<FormArray>this.myReactiveForm.get("hobbies")).controls;
  //   return (this.myReactiveForm.get("hobbies") as FormArray).controls;
  // }

  getControls() {
    return (<FormArray>this.myReactiveForm.get("skills")).controls;
  }

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      userDetail: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      course: new FormControl(null, Validators.required),
      gender: new FormControl("Male"),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
  }

  onSubmit() {
    console.log(
      this.myReactiveForm.value.course,
      this.myReactiveForm.value.gender,
      this.myReactiveForm.value.skills[0]
    );
  }

  addSkill() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get("skills")).push(control);
  }
}
