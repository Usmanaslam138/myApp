import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appTestingDirective]",
})
export class TestingDirectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "grey");
  }

  @HostListener("click") myClick() {
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "orange");
    const element: any = document.querySelector(".hello");
    element.classList.toggle("active");
  }

  @HostListener("mouseover") myMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "red");
  }

  @HostListener("mouseout") myMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "white");
  }

  changeBg(color: string) {
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", color);
  }
}
