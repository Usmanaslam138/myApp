import { Component } from "@angular/core";

@Component({
  selector: "app-routings",
  templateUrl: "./routings.component.html",
  styleUrls: ["./routings.component.css"],
})
export class RoutingsComponent {
  userName: string = "Benefits of Angular";
  searchTerm: string = "";

  angularBenefits = [
    "Modular architecture for organized code",
    "Two-way data binding for automatic UI updates",
    "Dependency injection for efficient component management",
    "Powerful templating and directives for dynamic views",
    "Rich ecosystem of pre-built libraries and packages",
    "Cross-platform development with Angular NativeScript",
    "Strong community and extensive documentation",
    "Enhanced testing support with Angular testing utilities",
    "Built-in tooling for optimizing performance and productivity",
    "Consistent updates and support from Google",
  ];

  products = [
    { id: 1, name: "Mobile Phone", price: 299.99 },
    { id: 2, name: "TV", price: 499.99 },
    { id: 3, name: "Laptop", price: 799.99 },
    { id: 4, name: "Washing Machine", price: 399.99 },
    { id: 5, name: "Refrigerator", price: 599.99 },
    { id: 6, name: "Tablet", price: 199.99 },
    { id: 7, name: "Microwave Oven", price: 129.99 },
    { id: 8, name: "Digital Camera", price: 349.99 },
    { id: 9, name: "Coffee Maker", price: 49.99 },
    { id: 10, name: "Vacuum Cleaner", price: 179.99 },
    { id: 11, name: "Bluetooth Speaker", price: 79.99 },
    { id: 12, name: "Smartwatch", price: 199.99 },
    { id: 13, name: "Gaming Console", price: 349.99 },
    { id: 14, name: "Toaster", price: 29.99 },
    { id: 15, name: "Hair Dryer", price: 49.99 },
    { id: 16, name: "Blender", price: 69.99 },
    { id: 17, name: "Electric Kettle", price: 34.99 },
    { id: 18, name: "Digital Thermometer", price: 19.99 },
    { id: 19, name: "Fitness Tracker", price: 89.99 },
    { id: 20, name: "Sneakers", price: 79.99 },
    { id: 21, name: "Headphones", price: 129.99 },
    { id: 22, name: "Desk Chair", price: 89.99 },
    { id: 23, name: "Bed Linen Set", price: 49.99 },
    { id: 24, name: "Camping Tent", price: 149.99 },
    { id: 25, name: "Kitchen Knife Set", price: 59.99 },
    { id: 26, name: "Backpack", price: 39.99 },
    { id: 27, name: "Guitar", price: 299.99 },
    { id: 28, name: "Smartphone Case", price: 14.99 },
    { id: 29, name: "Sunglasses", price: 59.99 },
    { id: 30, name: "Dumbbell Set", price: 69.99 },
  ];
}
