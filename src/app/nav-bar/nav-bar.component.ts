import { Component, EventEmitter, Output } from '@angular/core';
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
  constructor (private api:ApiService) {}
  ngOnInit(): void {
    this.username = localStorage.getItem('username') || ''
  }
  
    darkMode(){
      this.darkModeToggle=!this.darkModeToggle
      this.darkMODE.emit()
    }

    clearAllChats(){
      this.api.clearChats().subscribe((result:any)=>{
        console.log(result);
      },
      (result:any)=>{
        console.log(result);
        
      }
      )
      this.api.getQuestionArray()
      this.deletechat.emit()
    }
}
