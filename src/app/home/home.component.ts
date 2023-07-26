import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Food } from "src/types/food";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {

  foodList: Food[] = [];
  currentFood:string = '';
  isTheSame:boolean = false;
  preveousFood:string = '';
  sameFoodCounter:number = 0;

  constructor(private apiService: ApiService) {}

  generateFood():void{
    this.apiService.getFood().subscribe((res) => {

      this.foodList = Object.values(res);
      const foodsLength = this.foodList.length;
      this.isTheSame = false;

      const random = Math.floor(Math.random() * foodsLength);
      this.currentFood = this.foodList[random].type;

      if(this.preveousFood === this.currentFood){
        this.isTheSame = true,
        this.sameFoodCounter++;
      }
      this.preveousFood = this.currentFood
    });

}

regenerateFood():void{
  this.apiService.getFood().subscribe((res) => {

    this.foodList = Object.values(res);
    const foodsLength = this.foodList.length;

    const random = Math.floor(Math.random() * foodsLength);
    this.currentFood = this.foodList[random].type;

    this.preveousFood === this.currentFood 
    ? this.sameFoodCounter++
    : (this.sameFoodCounter = 0 , this.isTheSame = false);
    
    this.preveousFood = this.currentFood
  });

}

}
