import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.css']
})
export class ChatSectionComponent{
    startState:boolean = true
    loadingState:boolean = false
    errorMessage:string = ""
    answer:string = ''
    chatsArray:any =[]
  @Input() darkmode:boolean=true
  @Output() updateSideBar = new EventEmitter()
  constructor (private fBuilder:FormBuilder,private api:ApiService) {}
  chatForm = this.fBuilder.group({
    question:['',[Validators.required]]
  })
    askQuestion(){
      this.loadingState = true
      if(this.chatForm.valid){
          let question = this.chatForm.value.question || ''
          this.api.ask(question).subscribe(
          (result:any)=>{
            this.startState = false
            this.loadingState = false
            this.answer = result.answer 
            this.chatsCollection(question,this.answer,true)
            this.api.getQuestionArray()
            this.updateSideBar.emit()
          },
          (result:any)=>{
            this.loadingState = false
            this.startState = false
            this.api.getQuestionArray()
            this.updateSideBar.emit()
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
    

