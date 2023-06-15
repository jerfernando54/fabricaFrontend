import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from "@angular/router";
import { first, Observable, of } from 'rxjs';
import {FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/user.model';
import { authData } from 'src/app/models/user.model';
import { UserService }from 'src/app/Services/user/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public userAuth: authData = {}
  isButtonLoginDisabled = true;
  username = ''

  form!: FormGroup;
  error?: string;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private userSVC: UserService
  ) { 
      if (this.userSVC.userValue) {
      this.router.navigate(['dashboard']);
      }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    console.log(this.form.value)
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

    this.userSVC.login(userData).pipe(first())
      .subscribe({next: () => {
        const returnUrl = this.actRoute.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl('dasboard');
      },
      error: error => {
        this.error = error;
        this.loading = false;
      }
    })

    // this.validatForm() ?
    //   this.userSVC.login(this.form.value).pipe(first()).subscribe(()=>{
    //     this.router.navigateByUrl('dasboard');
    //     this.resetForm();
    //   }) : false;
  }

  changeInput(): void{
    if (!this.userAuth.username! || this.userAuth.username!.trim() === '' && !this.userAuth.password! || this.userAuth.password!.trim() === '') {
      this.isButtonLoginDisabled = true;
    } else {
      this.isButtonLoginDisabled = false;
    }
  }

  resetForm(): void{
    this.userAuth.username = '';
    this.userAuth.password = '';
    this.isButtonLoginDisabled = true;
  }

  validatForm(): boolean {
    return this.userAuth.username !== undefined || !this.userAuth.password !== undefined ? true: false;
  }
}
