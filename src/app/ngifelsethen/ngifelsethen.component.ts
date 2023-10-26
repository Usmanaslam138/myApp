import { Component } from "@angular/core";

@Component({
  selector: "app-ngifelsethen",
  templateUrl: "./ngifelsethen.component.html",
  styleUrls: ["./ngifelsethen.component.css"],
})
export class NgifelsethenComponent {
  isValid: boolean = false;

  createBlock() {
    if (this.isValid == true) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

  msg: string = "";
  onmsgshow: boolean = false;

  selectedProducts: string = "";

  getValue(item) {
    this.selectedProducts = item.target.value;
    this.onmsgshow = true;
  }

  permissiongranted: boolean = false;

  angularBenefits = [
    {
      title: "Modular Development",
      description:
        "Angular uses a component-based architecture, making it easy to organize and maintain code in a modular fashion.",
    },
    {
      title: "TypeScript Integration",
      description:
        "TypeScript provides static typing, enhancing code quality and IDE support for code completion, error checking, and refactoring.",
    },
    {
      title: "Two-way Data Binding",
      description:
        "Angular offers two-way data binding, simplifying the synchronization of data between the model and the view.",
    },
    {
      title: "Dependency Injection",
      description:
        "'Angular's built-in dependency injection system simplifies managing and injecting dependencies into components, making code more maintainable and testable.'",
    },
    {
      title: "Reusable Components",
      description:
        "Developers can create and reuse components, reducing redundant code and enhancing code maintainability.",
    },
    {
      title: "Cross-platform Development",
      description:
        "Angular supports the development of web, mobile, and desktop applications, providing a consistent development experience across platforms.",
    },
    {
      title: "Powerful CLI",
      description:
        "The Angular CLI streamlines project setup, code generation, testing, and deployment tasks, improving development productivity.",
    },
    {
      title: "Comprehensive Ecosystem",
      description:
        "Angular offers a wide range of libraries, tools, and resources, along with a strong community, to support development needs.",
    },
  ];

  showbenefits(uconfirm) {
    if (uconfirm.value == "confirm") {
      this.permissiongranted = true;
    } else {
      alert("Plz type confirm");
    }
  }
}
