import { Component, EventEmitter, Output } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() darkMODE = new EventEmitter()
  username:string=""
  darkModeToggle:boolean=true
  ngOnInit(): void {
    this.username = localStorage.getItem('username') || ''
  }
  
    darkMode(){
      this.darkModeToggle=!this.darkModeToggle
      this.darkMODE.emit()
    }
}
