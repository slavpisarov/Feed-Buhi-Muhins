import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent implements OnInit{

  id:string = ''
  food:string = ''

  constructor(private router:Router,
     private activatedRoute:ActivatedRoute,
     private apiService:ApiService,
     private userService:UserService){}

ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.params['foodId'];
  this.apiService.getOne(this.id).subscribe((food)=>{
    this.food = food.type  
  })
}


  editFood(form:NgForm):void{
    const {type} = form.value;

    this.apiService.updateOne(this.id, type).subscribe(()=>{
      this.router.navigate(['/catalog'])
    })
    
  }

  cancel():void{
    this.router.navigate(['/catalog'])
  }
}
