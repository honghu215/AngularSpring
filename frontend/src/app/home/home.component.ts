import { UserService, User } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { TokenStorageService } from '../auth/token-storage.service';
// import * as $ from 'jquery';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  errorMessage: string;

  constructor(private token: TokenStorageService,
              private userService: UserService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    // this.userService.getUserList().subscribe(
    //   users => {
    //     this.users = users;
    //   },
    //   error => {
    //     this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
    //   }
    // );
  }

  deleteUser(obj: any) {
    console.log(obj);
    // const userId = obj.id;
    // console.log(`UserId: ${obj} will be deleted.`);
    // this.userService.deleteUser(userId).subscribe(
    //   data => {
    //     console.log(`User ${userId} has already been deleted.`);
    //   }
    // );
  }
  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
