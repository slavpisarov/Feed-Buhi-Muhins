import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private userService: UserService, private router: Router) {}

  // get isLoggedIn(): boolean {
  //   return this.userService.isLogged;
  // }

  ngOnInit(): void {
    console.log(this.userService.isLogged);
      if (localStorage.getItem('accessToken')) {
        this.userService.loggedIn = true;
      }
      
  }
    get isLoggedIn(): boolean {
    return this.userService.loggedIn;
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
