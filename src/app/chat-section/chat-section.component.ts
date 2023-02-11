import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.css']
})
export class ChatSectionComponent implements OnInit {
    errorState:boolean = false
    errorMessage:string = ""
    answer:string = ''
    chatsArray:any =[]
  @Input() darkmode:boolean=true
  @Output() updateSideBar = new EventEmitter()
  constructor (private fBuilder:FormBuilder,private api:ApiService) {}
  chatForm = this.fBuilder.group({
    question:['',[Validators.required]]
  })
ngOnInit(): void {
  this.api.getQuestionArray()
}
    askQuestion(){
      console.log('inside chat component')
      if(this.chatForm.valid){
          let question = this.chatForm.value.question || ''
          this.api.ask(question).subscribe(
          (result:any)=>{
            this.errorState = false
            this.answer = result.answer 
            this.chatsCollection(question,this.answer,true)
            this.api.getQuestionArray()
            this.updateSideBar.emit()
          },
          (result:any)=>{
            
            this.errorState = true
            this.api.getQuestionArray()
            this.updateSideBar.emit()
            this.errorMessage = result.error.message
            this.chatsCollection(question,this.errorMessage,false)
          }
          )
      }else{
        this.errorState = true
        this.errorMessage = "No question asked"
        alert('No question asked')
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
    

