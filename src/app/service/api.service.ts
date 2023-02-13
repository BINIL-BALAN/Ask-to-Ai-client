import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const options = {
  headers: new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  questions = new BehaviorSubject([])
  questionArray:any = []
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
   return this.api.get(`http://localhost:3000/ask/${question}`,this.insertToken())
}

getQuestionArray(){
  this.api.get('http://localhost:3000/get-questions',this.insertToken()).subscribe((result:any)=>{
    this.questionArray=result.questions
    this.questions.next(this.questionArray)
  },
  (result:any)=>{
    console.log('inside get array error',result);
  }
  )  
}

clearChats(){
  return this.api.delete('http://localhost:3000/delete-all-chats',this.insertToken())
}

deleteOnechat(index:number){

  return this.api.delete('http://localhost:3000/delete-one-chat/'+index,this.insertToken())
}
}
