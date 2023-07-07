import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { first } from 'rxjs';
import { UserService } from 'src/app/Services/user/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form!: FormGroup;
  
  error?: string;
  success?: string;
  
  loading = false;
  submited = false;
  isButtonLoginDisabled = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userSvc: UserService
  ) {}

   ngOnInit() {
    this.createForm()
  }

  get formControlls() {
    return this.form.controls;
  }

  createUser() {
    if (this.form.invalid){
      return;
    }

    this.resetStatus();

    this.userSvc.addUser(this.form.value).pipe(first())
      .subscribe({
        next: (res) => {
          this.loading = false;
          this.success = res.Message
          this.isButtonLoginDisabled = true;
          this.userSvc.getUsers().subscribe()
          setTimeout(() => {
            this.router.navigateByUrl('user/users');
          }, 1500)
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      })
  }

  formValid(): void{
    if (this.form.invalid) {
      this.isButtonLoginDisabled = true;
    } else {
      this.isButtonLoginDisabled = false;
    }
  }

  resetStatus(): void {
    this.error = ''
    this.success = ''
    this.loading = true
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['',Validators.required],
      email: ['', Validators.required],
      password:['', Validators.required],
    })
  }
}
