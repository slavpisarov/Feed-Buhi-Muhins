import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Food } from 'src/types/food';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  foodList: Food[] = [];
  isExisting: boolean = false;


constructor(private apiService:ApiService, private router:Router){}

  addFoodSubmitHandler(form:NgForm):void{
    if(form.invalid)return;

    const {type} = form.value;

    this.apiService.getFood().subscribe((foods)=>{

      Object.values(foods).forEach(el => {
        if(el.type.toLowerCase() === type.toLowerCase()){
          this.isExisting =true
        }
      });

    })

    this.apiService.addFood(type).subscribe(()=>{
      this.router.navigate(['/home'])
    })

  }

}
