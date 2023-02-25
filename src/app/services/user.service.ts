import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL : string = "http://localhost:9001/patient";

  createUser(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) {}

    get(){
      const url = "http://localhost:9001/patient"
      return this.http.get(url);
    }

    post(data:any){
      const url = 'http://localhost:9001/patient'

      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');

    return this.http.post(url, JSON.stringify(data), {headers: headers});


    }
}
