import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Food } from "src/types/food";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  
})
export class HomeComponent {
  isLoading: boolean = false;
  foodList: Food[] = [];
  currentFood: string = "";
  isTheSame: boolean = false;
  preveousFood: string = "";
  sameFoodCounter: number = 0;

  constructor(private apiService: ApiService) {}

  generateFood(): void {
    this.isLoading = true;

    this.apiService.getFood().subscribe((foods) => {
      this.foodList = Object.values(foods);
      const foodsLength = this.foodList.length;
      this.isTheSame = false;

      const random = Math.floor(Math.random() * foodsLength);
      this.currentFood = this.foodList[random].type;

      setTimeout(() => {
        if (this.preveousFood === this.currentFood) {
          this.isTheSame = true;
           this.sameFoodCounter++;
        }
        this.isLoading = false;
      }, 1000);

      setTimeout(() => {
        this.preveousFood = this.currentFood;
      }, 1000);
    });

  }

  regenerateFood(): void {
    this.isLoading = true;
    this.apiService.getFood().subscribe((res) => {
      this.foodList = Object.values(res);
      const foodsLength = this.foodList.length;

      const random = Math.floor(Math.random() * foodsLength);
      this.currentFood = this.foodList[random].type;

      setTimeout(() => {

        this.preveousFood === this.currentFood
          ? this.sameFoodCounter++
          : ((this.sameFoodCounter = 0), (this.isTheSame = false));
        this.isLoading = false;

      }, 1000);

      setTimeout(() => {

        this.preveousFood = this.currentFood;
      }, 1000);
    });
  }
}
