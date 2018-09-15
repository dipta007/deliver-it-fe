import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AppRestService} from '../app.rest.service'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: "",
    password: "",
    role: "Admin"
  };
  userRoles = [
    "Admin",
    "Customer"
  ]
  
  constructor(private appRestService: AppRestService,
              private cookieService: CookieService,
              private router: Router) { }

  ngOnInit() {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  logIn() {
    if(this.user.email && this.user.password) {
      return this.appRestService.logInUser(this.user.email, this.user.password).subscribe(response => {
        this.cookieService.set('token', response['token']);
        if(this.user.role == "Customer") {
          this.router.navigate(['/customer'])
        } else {
          this.router.navigate(['/admin'])
        }
      })
    }
  }
}
