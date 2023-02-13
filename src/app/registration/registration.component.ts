import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private api: ApiService, private fBuilder: FormBuilder,private router:Router) { }
    regisrationMessage:string=''
    regisrationMessageclass:string=''
    registerState:boolean = false
    registrationForm = this.fBuilder.group({
    username: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]
  })

  signUp() {
    if(this.registrationForm.valid){
      this.registerState=true
      let username=this.registrationForm.value.username || ''
      let email=this.registrationForm.value.email || ''
      let password=this.registrationForm.value.password || ''

      this.api.regiaster(username, email, password).subscribe((result: any) => {
        setTimeout(() => {
          this.registerState=false
          this.regisrationMessage=result.message
           this.regisrationMessageclass='alert alert-success'
        }, 2000);
           setTimeout(()=>{
            this.router.navigateByUrl("/login")
           },3000)
      },
        (result: any) => {
          setTimeout(() => {
            this.registerState=false
            this.regisrationMessage=result.error.message
          this.regisrationMessageclass='alert alert-danger'
          }, 2000);
          setTimeout(() => {
            this.registrationForm.reset()
            this.regisrationMessage=''
            this.regisrationMessageclass=''
          }, 3000); 
        }
      )
    }else{
      this.registerState=false
      this.regisrationMessage='Please fill all field'
      this.regisrationMessageclass='alert alert-danger'
      setTimeout(() => {
        this.regisrationMessage=''
        this.regisrationMessageclass=''
      }, 2000); 
    }
  }
}
