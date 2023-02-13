import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-demo-chat-section',
  templateUrl: './demo-chat-section.component.html',
  styleUrls: ['./demo-chat-section.component.css']
})
export class DemoChatSectionComponent implements OnInit {
  startState:boolean = true
  loadingState:boolean = false
  errorMessage:string = ""
  answer:string = ''
  chatsArray:any =[]
@Input() darkmode:boolean=true
@Output() updateSideBar = new EventEmitter()
constructor (private fBuilder:FormBuilder,private api:ApiService,private router:Router) {}
ngOnInit(): void {

}

chatForm = this.fBuilder.group({
  question:['',[Validators.required]]
})
  askQuestion(){
    this.loadingState = true
    if(this.chatForm.valid){
        let question = this.chatForm.value.question || ''
        this.api.tryDemo(question).subscribe(
        (result:any)=>{
          this.startState = false
          this.loadingState = false
          this.answer = result.answer 
          this.chatsCollection(question,this.answer,true)
        },
        (result:any)=>{
          this.loadingState = false
          this.startState = false
          this.errorMessage = result.error.message
          this.chatsCollection(question,this.errorMessage,false)
        }
        )
    }else{
      this.startState = false
      this.loadingState = false
      this.errorMessage = "No question asked"
    }
  }

  chatsCollection(question:string,answer:string,state:boolean){
    let chat = {
      question,
      answer,
      state
    }
    this.chatsArray.push(chat)
  }
  
 
}
