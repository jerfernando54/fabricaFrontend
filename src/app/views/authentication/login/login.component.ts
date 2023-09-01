import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { first } from 'rxjs';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Roles } from 'src/app/models/roles.model';

import { authData } from 'src/app/models/user.model';
import { AuthService }from 'src/app/Services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public userAuth: authData = {}
  isButtonLoginDisabled = true;

  form!: FormGroup;
  error?: string;
  loading = false;
  submitted = false;
  roles = Roles

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { 
      if (this.authService.userValue) {
        this.router.navigate(['/dashboard']);
      }
  }

  ngOnInit() {
    this.createForm()
  }

  get f() {return this.form.controls;}

  login(): void{
    this.submitted = true;
    this.error = ''

    if (this.form.invalid){
      return;
    }

    this.loading = true;

    this.authService.login(this.form.value).pipe(first())
      .subscribe({next: () => {
        this.router.navigateByUrl('dasboard');
      },
      error: error => {
        this.error = error.message || 'Could not establish connection to server';
        this.loading = false;
      }
    })
  }

  changeInput(): void{
    if (this.form.invalid) {
      this.isButtonLoginDisabled = true;
    } else {
      this.isButtonLoginDisabled = false;
    }
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
}
