import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.css']
})
export class ChatSectionComponent {
  errorMessage:string = ""
  answer:string = ''
  @Input() darkmode:boolean=true
  constructor (private fBuilder:FormBuilder,private api:ApiService) {}
  chatForm = this.fBuilder.group({
    question:['',[Validators.required]]
  })

    askQuestion(){
      console.log('inside chat component')
      if(this.chatForm.valid){
          let question = this.chatForm.value.question || ''
          this.api.ask(question).subscribe(
          (result:any)=>{
            this.answer = result.answer
          },
          (result:any)=>{
            this.errorMessage = result.error.message
          }
          )
      }else{
        this.errorMessage = "No question asked"
        alert('No question asked')
      }
    }
  }
    

