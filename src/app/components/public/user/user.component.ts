import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router)
  { 
    this.createForm()
  }

  ngOnInit(): void {
  }

  get nome() { return this.userForm.controls["nome"] }
  get email() { return this.userForm.controls["email"] }
  get password() { return this.userForm.controls["password"] }

  createForm() : void {
    this.userForm = this.formBuilder.group({
      nome: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(38) ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(12), Validators.maxLength(24) ])
    })
  }

  onSubmit() : void {

    this.userService.inserir(new User(null, this.nome.value, this.email.value, this.password.value)).subscribe({
      next: () => {
        this.snackBar.open("Login realizado", '', { duration: 6000 })
        this.router.navigate(["/login"])
      },
      error: error => {
        this.snackBar.open(error.error, '', { duration: 6000 })
      }
    })
  }
}
