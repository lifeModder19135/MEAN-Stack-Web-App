import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Class properties
  username: String;
  password: String;

  constructor(private authService: AuthService,
              private router: Router,
              private fms: FlashMessagesService) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user)
      .subscribe(data => {
        if (data.success){
          this.authService.storeUserData(data.token, data.user);
          this.fms.show('You are now logged in!', {timeout:5000});
          this.router.navigate(['dashboard']);
        }else{
          this.fms.show(data.msg, {timeout:5000});
        }
      });
    ;
  }

}
