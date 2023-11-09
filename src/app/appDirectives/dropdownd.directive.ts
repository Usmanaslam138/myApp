import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appDropdownd]",
})
export class DropdowndDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding("class.active") className;
  @HostListener("click") myClick() {
    this.className = !this.className;
  }
}
