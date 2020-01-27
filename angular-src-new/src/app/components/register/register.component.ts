import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {CheckdbService} from '../../services/checkdb.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname: String;
  lastname: String;
  email: String;
  phone: String;
  username: String;
  password: String;
  role: String;

  constructor(private validateService: ValidateService,
              private fms: FlashMessagesService,
              private authService: AuthService,
              private router: Router,
              private checkdb: CheckdbService)  { }


  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
      username: this.username,
      password: this.password,
      role: this.role
    }

    if (!this.validateService.registrationIsCompleted(user)) {
      console.log('One or more fields are empty.');
      this.fms.show('One or more fields are empty.', {cssClass: "validation-error", timeout: 50000 });
      return false;
    }else if(!this.validateService.emailIsValid(this.email)) {
      console.log('Email is invalid.');
      this.fms.show('Email is invalid.', {cssClass: "validation-error", timeout: 25000 });
      return false;
    }else if(!this.validateService.phoneIsValid(this.phone)) {
      console.log('Phone number is invalid.');
      this.fms.show('Phone number is invalid.', {cssClass: "validation-error", timeout: 25000 });
      return false;
    }else{
      this.checkdb.CheckDbForUser(user).subscribe((data) => {
        //Ensure that username is not already registered
        if(data.success) {
          //Register User
          this.authService.registerUser(user).subscribe(moredata => {
            if(moredata.success){
              this.fms.show(user.username + ' is now a registered user!');
              this.router.navigate(['/login'])
              return true;
            }else{
              this.fms.show('Something went wrong');
              return false
            }
          });
        }else{
            this.fms.show(data.msg)
      };
      })
      console.log(user);




    }
  }
}
