import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() darkMODE = new EventEmitter()
  @Output() deletechat = new EventEmitter()
  username:string=""
  darkModeToggle:boolean=true
  clearChat:boolean = false
  logoutStatus:boolean = false
  constructor (private api:ApiService,private router:Router) {}
  ngOnInit(): void {
    this.username = localStorage.getItem('username') || ''
  }
  
    darkMode(){
      this.darkModeToggle=!this.darkModeToggle
      this.darkMODE.emit()
    }

    clearAllChats(){
      this.clearChat=true
      this.api.clearChats().subscribe((result:any)=>{
        console.log(result);
        setTimeout(() => {
          this.clearChat=false
        },200);
      },
      (result:any)=>{
        console.log(result);
        setTimeout(() => {
          this.clearChat=false
        },200);
      }
      )
      this.api.getQuestionArray()
      this.deletechat.emit()
    }

    logout(){
      this.logoutStatus=true
       localStorage.removeItem('email')
       localStorage.removeItem('token')
       setTimeout(() => {
        this.logoutStatus=false
        this.router.navigateByUrl('')
       }, 2000);
    }
}
