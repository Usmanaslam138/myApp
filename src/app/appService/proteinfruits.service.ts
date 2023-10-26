import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProteinfruitsService {
  constructor() {}

  proteinRichFruits = [
    {
      name: "Guava",
      proteinContent: "4.2 grams per 100g",
    },
    {
      name: "Blackberries",
      proteinContent: "2 grams per 100g",
    },
    {
      name: "Jackfruit",
      proteinContent: "2.5 grams per 100g",
    },
    {
      name: "Avocado",
      proteinContent: "2 grams per 100g",
    },
    {
      name: "Passion Fruit",
      proteinContent: "1.5 grams per 100g",
    },
  ];
}
