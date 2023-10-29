import { Component, EventEmitter, Output } from "@angular/core";
import { Input } from "@angular/core";
@Component({
  selector: "app-userpanel",
  templateUrl: "./userpanel.component.html",
  styleUrls: ["./userpanel.component.css"],
})
export class UserpanelComponent {
  @Input() placeHolderText: string = "";
  @Output() inputEvent = new EventEmitter();
  @Input() count: number = 0;

  onCreate(inputdata) {
    if (inputdata.value.length > 0) {
      this.inputEvent.emit(inputdata.value);
      inputdata.value = "";
    }
  }
}
