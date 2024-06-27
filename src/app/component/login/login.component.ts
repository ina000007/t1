// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent {

//   username = '';
//   password = '';

//   loginUser()
//   {
//     console.log("Username "+ this.username);
//     console.log("password "+ this.password);
//   }

// }


export class LoginComponent implements OnInit{
  email:string = ''
  password:string = ''
  isSubmitting:boolean = false
  validationErrors:Array<any> = []
 
  constructor(private router: Router, private authService: AuthService) {}
 
  ngOnInit(): void {
    if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
      this.router.navigateByUrl('/home')
    }
  }
 
  loginAction() {
    console.log("Username "+ this.email);
    console.log("password "+ this.password);
    // let authService = inject(AuthService);
    this.authService.login(this.email, this.password);

     let isAuthenticated = this.authService.isAuthenticatedUser();


     if(isAuthenticated){
      this.router.navigateByUrl('/home')
    } else
    {
      this.router.navigateByUrl('/')
    }

    console.log(this.authService.isAuthenticatedUser());
  }
}