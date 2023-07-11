import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, first, Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';
import { icons } from 'src/components/icons/icons'
import { Router } from "@angular/router";
import { roles } from 'src/components/roles/role';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  public form!: FormGroup;

  public user: User = {};
  public users: User[] = [];

  public icons = icons;
  public roles = roles;
  
  public loading = false;
  public submited = false;
  public toast: boolean = true;
  public showToast: boolean = false;
  public isButtonLoginDisabled = true;
  public showToastBorrarUsuario: boolean = false;
  
  public bgColor: string = '';
  public toastTitle: string = '';
  public toastContent?: string = '';
  public currentUserId: string = '';
  
  private _userSubscription!: Subscription;
  
  constructor(
    private userSVC: UserService,
    private formBuilder: FormBuilder,
    private router: Router,) {}

  ngOnInit(): void {
    this.getUsers();
    this._userSubscription = this.userSVC.refresh$.subscribe(() => {
      this.getUsers();
    })

    this.currentUserId = JSON.parse(localStorage.getItem('user')!).id

    this.createForm();
    this.disableInputs();
  };

  getUsers() {
    this.userSVC.getUsers().subscribe(() => {
      this.users = JSON.parse(localStorage.getItem('users')!);
    })
  }

  getDate(date: any): string{
    let fecha = new Date(date);
    let formattedDate = fecha.toLocaleDateString();
    return formattedDate;
  };

  editUser() {
    this.toastTitle = 'Modificar datos del usuario'
    this.userSVC.updateUser(this.form.value).pipe(first())
      .subscribe({
        next: (res) => {
          this.showToast = true;
          this.bgColor = 'success';
          this.toastContent = res.Message

          setTimeout(()=>{
            this.showToast = false
          }, 7000)

        },
        error: err => {
          this.toastContent = err.message
          this.showToast = true;
          this.bgColor = 'danger';
          this.showToastBorrarUsuario = false;

          setTimeout(() => {
            this.showToast = false 
          }, 7000)
          
        }
      })
  };

  deleteUser() {
    const userId = this.form.controls['userId'].value;
    if(userId) {
      this.toastTitle = 'Borrar usuario';
      this.userSVC.deleteUser(userId).pipe(first())
      .subscribe({
        next: (res) => {          
          this.toastContent = res.Message;
          this.showToastBorrarUsuario = false;
          this.showToast = true ;
          this.bgColor = 'success';

          setTimeout(() => {
            this.showToast = false 
          }, 7000)
        },
        error: err => {
          this.toastContent = err.message;

          this.showToastBorrarUsuario = false;
          this.showToast = true ;
          this.bgColor = 'danger';

          setTimeout(() => {
            this.showToast = false 
          }, 7000)
        }
      })
    }
  };
  
  confirmarUser(user: User) {
    this.form.setValue({
      name: user.name!,
      email: user.email!,
      userId: user.userId!,
      username: user.username!,
      role: user.role! == 'admin'? 'Administrador': 'Fabrica'
    }) 
    // this.formValid();
  };

  closeToast() {
    this.resetStatus();
  };

  disableInputs() {
    this.form.get('email')?.disable();
    this.form.get('username')?.disable();
  }
  resetStatus() {
    this.showToast = false;
    this.isButtonLoginDisabled = true;
    this.showToastBorrarUsuario = false;
  };

  ngOnDestroy(): void {
    if (this._userSubscription) {
      this._userSubscription.unsubscribe();
    }
    this.resetStatus();
  };

  formValid(): void{
    if (this.form.invalid) {
      this.isButtonLoginDisabled = true;
    } else {
      this.isButtonLoginDisabled = false;
    }
  };
 
  createForm(): void {
    this.form = this.formBuilder.group({
      userId: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required],
      role:['', Validators.required],
    })
  };
}
