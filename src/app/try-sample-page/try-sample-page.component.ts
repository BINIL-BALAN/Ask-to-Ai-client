import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-try-sample-page',
  templateUrl: './try-sample-page.component.html',
  styleUrls: ['./try-sample-page.component.css']
})
export class TrySamplePageComponent implements OnInit {
  darkModeToggle:boolean=true
  brigtMode:string='row dark-mode px-0 mx-0'
  expireState:boolean = true
  constructor (private api:ApiService,private router:Router) {}
  ngOnInit(): void {
    this.expireSession()
  }
  darkMode(){
    this.darkModeToggle=!this.darkModeToggle
    if(this.darkModeToggle){
      this.brigtMode='row dark-mode px-0 mx-0'
    }else{
      this.brigtMode='row bright-mode px-0 mx-0'
    }
  }

  expireSession(){
    setTimeout(() => {
      this.expireState = false
    }, 6000);
  }
}
