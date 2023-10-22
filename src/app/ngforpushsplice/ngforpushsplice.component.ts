import { Component } from "@angular/core";

@Component({
  selector: "app-ngforpushsplice",
  templateUrl: "./ngforpushsplice.component.html",
  styleUrls: ["./ngforpushsplice.component.css"],
})
export class NgforpushspliceComponent {
  infoProducts = [
    {
      name: "Laptop",
      id: 1001,
      price: 2500,
      quantity: 3,
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
    },
    {
      name: "Hp Printer",
      id: 1002,
      price: 25000,
      quantity: 7,
      img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Mobile",
      id: 1003,
      price: 45000,
      quantity: 10,
      img: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Washing Machine",
      id: 1004,
      price: 80000,
      quantity: 2,
      img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Refrigerator",
      id: 1005,
      price: 25000,
      quantity: 4,
      img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlZnJpZ2VyYXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
}
