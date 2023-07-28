import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FoodWithId } from 'src/types/foodWithId';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit{

  foodList: FoodWithId[] = [];

  constructor(private apiService: ApiService,
     private router:Router,
     private userService:UserService) {}

  ngOnInit(): void {

    this.apiService.getFoodWithLimit('6').subscribe((foods) => {

      for (const key of Object.entries(foods)) {

        const foodObj = {id:key[0], type:key[1].type}
        this.foodList.push(foodObj)
      }       
    });

    if (localStorage.getItem('[user]')) {
      this.userService.loggedIn = true;
    }
  }

  get isLoggedIn(): boolean {
    return this.userService.loggedIn;
  }

  delete(id:string){

    this.apiService.delete(id).subscribe(()=>{
        this.router.navigate(['/'])
    })
    
  }


}
