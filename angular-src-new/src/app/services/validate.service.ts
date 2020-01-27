import { Injectable } from '@angular/core';
//const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
//const config = require('../../../../config/database');const User = require('../../../../models/user');
//import {HttpClient} from '@angular/common/http';

@Injectable()
export class ValidateService {

  constructor(/* private http: HttpClient */) { }

  registrationIsCompleted(user) {
    if (
      user.firstname == undefined ||
      user.lastname == undefined ||
      user.email == undefined ||
      user.username == undefined ||
      user.password == undefined
    ) {
        return false;
    } else {
      return true;
    }
  }

  emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  phoneIsValid (phoneNumber) {
    return /^\d{10}$/.test(phoneNumber)
  }
  usernameIsAvailable (username) {



   /*User.getUserByUsername(username, (err, user) => {
      let usernameAvailable: Boolean;

      if (err) throw err;
      if(!user){
        usernameAvailable = true;
      } else {
        usernameAvailable = false;
      }

      return usernameAvailable;
    });   */
  }
}


