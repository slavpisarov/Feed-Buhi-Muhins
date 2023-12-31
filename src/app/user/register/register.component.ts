import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private userService:UserService, private router:Router){}

  register(form:NgForm):void{

    if(form.invalid) return;

    const { email, password, rePassword} = form.value;

    this.userService.register(email,password).subscribe(() =>{
      
      localStorage.setItem('[user]', JSON.stringify({email}));
      this.userService.loggedIn = true
      this.router.navigate(['/'])
    },err=>{alert("Something went wrong")})


  }


}
