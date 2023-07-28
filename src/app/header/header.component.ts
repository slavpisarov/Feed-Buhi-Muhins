import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

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
    if (localStorage.getItem('[user]')) {
      this.userService.loggedIn = true;
    }
    console.log(this.userService.loggedIn);
      
  }
    get isLoggedIn(): boolean {
    return this.userService.loggedIn;
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }


}
