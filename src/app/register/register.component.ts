import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { RegisterRestService } from './register.rest.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    fullName: "",
    email: "",
    password: "",
    passwordAgain: "",
    phoneNo: ""
  }

  constructor(private registerRestService: RegisterRestService,
              private router: Router) { }

  ngOnInit() {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  prepare() {
    return {
      email: this.user.email,
      fullName: this.user.fullName,
      password: this.user.password,
      phoneNo: this.user.phoneNo
    }
  }

  register() {
    if(this.user.fullName && this.user.email && this.user.password && this.user.passwordAgain && this.user.password == this.user.passwordAgain) {
      let payload = this.prepare();
      this.registerRestService.registerUser(payload).subscribe((res) => {
        if(res) {
          this.router.navigate(['/login'])
        }
      })
    }
  }

}
