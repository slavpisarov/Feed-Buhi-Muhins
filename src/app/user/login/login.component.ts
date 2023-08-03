import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private userService:UserService, private router:Router ){}

  login(form:NgForm):void{

    if(form.invalid) return;

    const { email, password} = form.value;
    
    this.userService.login().subscribe((res)=>{
      
      const users = Object.values(res);
      
      const user = users.find((a:any) => a.email === email && a.password === password);
        
      if(user){
        console.log(user);
        
        localStorage.setItem('[user]', JSON.stringify({email}));
        this.userService.loggedIn = true;
        this.router.navigate(['/'])
      } else{
        alert('User not found')
      }

    },err=>{alert("Something went wrong")})
  }  


}
