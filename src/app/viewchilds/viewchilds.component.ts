import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { Child1Component } from "../subjectcom/child1/child1.component";
import { Children1Component } from "./children1/children1.component";

@Component({
  selector: "app-viewchilds",
  templateUrl: "./viewchilds.component.html",
  styleUrls: ["./viewchilds.component.css"],
})
export class ViewchildsComponent implements AfterViewInit, OnInit {
  constructor(private renderer: Renderer2) {}

  @ViewChild("box") marker: ElementRef | any;
  @ViewChild(Children1Component) children: Children1Component | any;

  ngAfterViewInit(): void {
    // this.renderer.setStyle(
    //   this.marker.nativeElement,
    //   "backgroundColor",
    //   "green"
    // );
    // this.renderer.addClass(this.marker.nativeElement, "content");
    // this.renderer.setAttribute(
    //   this.marker.nativeElement,
    //   "title",
    //   "Using of renderer with viewChild"
    // );
    // this.marker.nativeElement.innerHTML =
    //   "<h1 class='text-warning'>Practice Done</h1>";
    // this.marker.nativeElement.style.backgroundColor = "green";
    // this.marker.nativeElement.classList = "content";
    // console.log(this.children);
  }
  value = "view child practice";
  date = new Date();
  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  // @HostListener("window:scroll", ["$event"]) myClick() {
  //   console.log("scrolling host listener");
  // }

  changeUser() {
    this.children.userName = "Maestero";
  }

  accessClick() {
    this.children.launchAlert();
  }
}
