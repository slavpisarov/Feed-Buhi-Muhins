import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from 'src/types/food';
import { FoodWithId } from 'src/types/foodWithId';

const apiFoodUrl = 'https://buhi-muhins-food-generator-default-rtdb.europe-west1.firebasedatabase.app/food.json';
const apiDeleteFoodUrl = 'https://buhi-muhins-food-generator-default-rtdb.europe-west1.firebasedatabase.app/food/${}.json'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getFood(){
    return this.http.get<Food[]>(apiFoodUrl)
  }

  addFood(type:string){
    return this.http.post<Food>(apiFoodUrl, {type})
  }

  delete(id:string){
    return this.http.delete<FoodWithId>(`https://buhi-muhins-food-generator-default-rtdb.europe-west1.firebasedatabase.app/food/${id}.json`)
  }

}
