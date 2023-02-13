import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() darkmode:boolean = true
  @Input() questionsArray:any = []
  constructor (private api:ApiService) {}
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

}
