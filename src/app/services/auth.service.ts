import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;

  constructor() { 
    this.isAuthenticated = localStorage.getItem('note-app-token')!=null?true : false;
  }

  isAuthenticatedUser(): boolean{
    return this.isAuthenticated;
  }


  login(username: string, pass: string): boolean
  {
    if(username === 'admin' && pass === 'admin123'){
      localStorage.setItem('note-app-token',"TOKEN");
      this.isAuthenticated = true;
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    console.log("User Logged out!!");
    localStorage.removeItem('note-app-token');
    this.isAuthenticated= false;
  }

}
