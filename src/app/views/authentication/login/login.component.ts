import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from "@angular/router";
import { first, Observable, of } from 'rxjs';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/user.model';
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

  constructor(
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { 
      if (this.authService.userValue) {
      this.router.navigate(['dashboard']);
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
    const userData = {
      username: this.f['username'].value, password: this.f['password'].value
    }

    this.authService.login(userData).pipe(first())
      .subscribe({next: () => {
        const returnUrl = this.actRoute.snapshot.queryParams['returnUrl'] || 'dasboard';
        this.router.navigateByUrl(returnUrl);
      },
      error: error => {
        this.error = error.error.Message || 'Could not establish connection to server';
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
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
