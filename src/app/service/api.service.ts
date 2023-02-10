import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

 constructor(private api:HttpClient) { }
    
  regiaster(username:string,email:string,password:string){
        let body ={
            username,
            email,
            password
        }
       return this.api.post('http://localhost:3000/registration',body)
  }

  login(email:string,password:string){
     let body = {
      email,
      password
     }
     
     return this.api.post('http://localhost:3000/login',body)
  }
}
