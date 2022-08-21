import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) 
  {
    this.createForm()
   }

  ngOnInit(): void {
  }

  get email() { return this.loginForm.controls["email"] }
  get password() { return this.loginForm.controls["password"] }
  
  createForm() : void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(12), Validators.maxLength(24) ])
    })
  }

  onSubmit() : void {
    this.loginService.authenticate(new Login(this.email.value, this.password.value)).subscribe({
      next: () => {
        this.snackBar.open("Login realizado", '', { duration: 6000 })
      },
      error: error => {
        this.snackBar.open(error.error, '', { duration: 6000 })
      }
    })
  }

  hasToken() : boolean{
    if(sessionStorage.getItem('token'))
      return true

    return false
  }
}
