import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/types/user';

const apiUserUrl = 'https://buhi-muhins-food-generator-default-rtdb.europe-west1.firebasedatabase.app/user.json';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User | undefined;

  loggedIn:boolean = false;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http:HttpClient) {
    try {
      const lsUser = localStorage.getItem('[user]') || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
   }


  register(email:string, password:string){
    return this.http.post<User>(apiUserUrl, {email,password})
  }

  login(){
    return this.http.get<User[]>(apiUserUrl)
  }

  logout(): void {
    this.loggedIn = false
    this.user = undefined;
    localStorage.removeItem('[user]');
  }
}
