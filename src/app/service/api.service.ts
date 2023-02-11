import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const options = {
  headers: new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: HttpClient) { }

  insertToken() {
    let token = localStorage.getItem('token') || ''
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.append('access-token', token)
      options.headers = headers
    }
    return options
  }

  regiaster(username: string, email: string, password: string) {
    let body = {
      username,
      email,
      password
    }
    return this.api.post('http://localhost:3000/registration', body)
  }

  login(email: string, password: string) {
    let body = {
      email,
      password
    }
    return this.api.post('http://localhost:3000/login', body)
  }

  ask(question:string){
    console.log('inside api');
   return this.api.get(`http://localhost:3000/ask/${question}`,this.insertToken())
}
}
