import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() darkmode:boolean = true
  @Input() questionsArray:any = []
  copyMessageStatus:boolean=false
  constructor (private api:ApiService,private clipboard:Clipboard) {}
  ngOnInit(): void {
  this.api.questions.subscribe((result:any)=>{
    this.questionsArray = result
  })
  }

  deleteOneChat(index:number){
    this.api.deleteOnechat(index).subscribe((result:any)=>{
      console.log(result);
      this.api.getQuestionArray()
      this.questionsArray = result
    },
    (result:any)=>{
      console.log(result);
    }
    )
  }

  copyToClipboard(text:string){
      this.clipboard.copy(text)
      this.copyMessageStatus = true
      setTimeout(() => {
        this.copyMessageStatus = false
      }, 2000);
  }

}
