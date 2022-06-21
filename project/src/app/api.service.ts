import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders
  constructor(
    public Http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept",'application/json');
    this.headers.append('Content-Type', 'applicstion/json');
    this.headers.append('Access-Control-Allow-Origin', '*'); 
   }
  addMember(data){
    return this.Http.post('http://localhost/finalproject/backend/create.php', data);
  }
}
