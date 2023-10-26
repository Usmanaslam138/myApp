import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent {
  @Input() productselected: boolean = false;
  @Input() selectedProduct: string = "";
  @Output() addedproduct = new EventEmitter<any>();

  onaddtocart() {
    this.addedproduct.emit(this.selectedProduct);
  }
}
