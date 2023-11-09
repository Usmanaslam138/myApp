import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SubjectbehService {
  constructor() {}

  userName = new BehaviorSubject<any>("Usman Khan");
}
