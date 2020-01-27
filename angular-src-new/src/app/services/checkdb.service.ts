import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CheckdbService {

  user: any;

  constructor(private http: Http) { }

  CheckDbForUser(user){
    let headers = new Headers();
    headers.append('ContentType', 'Application/Json');
    return this.http.post('http://localhost:3000/users/check', user, {headers: headers}).map(res => res.json());
  }

}
