import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  darkModeToggle:boolean=true
  questions:any=[]
  constructor (private api:ApiService) {}
  brigtMode:string='row dark-mode px-0 mx-0'
  darkMode(){
    this.darkModeToggle=!this.darkModeToggle
    if(this.darkModeToggle){
      this.brigtMode='row dark-mode px-0 mx-0'
    }else{
      this.brigtMode='row bright-mode px-0 mx-0'
    }
  }
  updatequestions(){
    this.api.questions.subscribe((result)=>{
          this.questions=result
    })
  }
}
