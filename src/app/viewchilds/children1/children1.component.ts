import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { TestingDirectiveDirective } from "src/app/appDirectives/testing-directive.directive";

@Component({
  selector: "app-children1",
  templateUrl: "./children1.component.html",
  styleUrls: ["./children1.component.css"],
})
export class Children1Component implements AfterContentInit, OnInit {
  constructor(private renderer: Renderer2) {}

  userName: string = "Usman Khan";

  @ContentChild("childcont") childParagraph: ElementRef | any;

  @ViewChild(TestingDirectiveDirective) myDir: TestingDirectiveDirective | any;
  launchAlert() {
    alert(this.userName);
    var text = this.renderer.createText("This text is created using renderer");
    this.renderer.appendChild(this.childParagraph.nativeElement, text);
  }

  ngOnInit() {}
  ngAfterContentInit(): void {
    console.log(this.childParagraph);
    this.renderer.setValue(this.childParagraph.nativeElement, "Hello World");
  }

  changeColor(color) {
    this.myDir.changeBg(color);
  }
}
