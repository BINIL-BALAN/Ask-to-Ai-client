import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() darkMODE = new EventEmitter()
  darkModeToggle:boolean=true
  ngOnInit(): void {
    
  }
  
    darkMode(){
      this.darkModeToggle=!this.darkModeToggle
      this.darkMODE.emit()
    }
}
