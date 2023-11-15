import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-ngifelsethen",
  templateUrl: "./ngifelsethen.component.html",
  styleUrls: ["./ngifelsethen.component.css"],
})
export class NgifelsethenComponent implements OnInit {
  myReactiveForm!: FormGroup;
  formStatus;
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
  userDetailList: any = [];
  formData: any = [];

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
        username: new FormControl(null, [
          Validators.required,
          this.alreadyExistUser.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.alreadyExistEmail
        ),
      }),
      course: new FormControl(null, Validators.required),
      gender: new FormControl("Male"),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });

    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     userDetail: {
    //       username: "Usman Khan",
    //       email: "usmanaslam138@yahoo.com",
    //     },
    //     course: "Angular",
    //     gender: "Male",
    //     skills: ["Time Management"],
    //   });

    //   this.myReactiveForm.patchValue({
    //     userDetail: {
    //       email: "uuusman138@gmail.com",
    //     },
    //   });
    // }, 5000);

    // this.myReactiveForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    this.myReactiveForm.statusChanges.subscribe((status) => {
      console.log(status);
      this.formStatus = status;
    });
  }

  onSubmit() {
    const data = this.myReactiveForm.value;
    this.formData.push({
      username: data.userDetail.username,
      Email: data.userDetail.email,
      course: data.course,
      gender: data.gender,
      skill: data.skills,
    });

    this.userDetailList.push(data.userDetail.username);
    this.myReactiveForm.reset({
      userDetail: {
        username: "",
        email: "",
      },
      course: "",
      gender: "Male",
      skills: [""],
    });
  }

  addSkill() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get("skills")).push(control);
  }

  alreadyExistUser(control: FormControl): { [s: string]: boolean } {
    if (this.userDetailList.indexOf(control.value) !== -1) {
      return { userAlreadyExist: true };
    }
    return null as any;
  }

  alreadyExistEmail(control: AbstractControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "uuusman138@gmail.com") {
          resolve({ emailNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 5000);
    });
    return myResponse;
  }
}
