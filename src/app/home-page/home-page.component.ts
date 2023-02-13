import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  darkModeToggle:boolean=true
  questions:any=[]
  brigtMode:string='row dark-mode px-0 mx-0'
  constructor (private api:ApiService) {}
  ngOnInit(): void {
    this.api.getQuestionArray()
  }
  darkMode(){
    this.darkModeToggle=!this.darkModeToggle
    if(this.darkModeToggle){
      this.brigtMode='row dark-mode px-0 mx-0'
    }else{
      this.brigtMode='row bright-mode px-0 mx-0'
    }
  }
  updatequestions(){
    this.api.getQuestionArray()
    this.api.questions.subscribe((result)=>{
    this.questions=result
    })
  }
}
