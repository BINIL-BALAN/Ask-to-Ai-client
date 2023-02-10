import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  darkModeToggle:boolean=true
  brigtMode:string='row dark-mode px-0 mx-0'
  darkMode(){
    this.darkModeToggle=!this.darkModeToggle
    if(this.darkModeToggle){
      this.brigtMode='row dark-mode px-0 mx-0'
    }else{
      this.brigtMode='row bright-mode px-0 mx-0'
    }
  }
}
