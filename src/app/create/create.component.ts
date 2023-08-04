import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Food } from 'src/types/food';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  foodList: Food[] = [];
  isExisting: boolean = false;

ngOnInit(): void {
  if (localStorage.getItem('[user]')) {
    this.userService.loggedIn = true;
  }
}
constructor(private apiService:ApiService, private router:Router, private userService:UserService){}

  addFoodSubmitHandler(form:NgForm):void{
    if(form.invalid)return;

    const {type} = form.value;

      this.apiService.addFood(type).subscribe(()=>{
        this.router.navigate(['/catalog'])
      },
      (error) => {
        console.error('Error fetching data:', error);
      })

  }

}
