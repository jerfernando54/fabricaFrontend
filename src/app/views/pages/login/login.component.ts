import { Component, OnInit } from '@angular/core';
import { User } from './../../../models/user.model';
import { Router } from "@angular/router";

const users = [{ id: 1, firstName: 'Jose', lastName: 'Fernando', username: 'jose', password: '1234' }];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  login() {
    this.router.navigateByUrl('dasboard')
  }

}
