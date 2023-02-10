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
    registrationForm = this.fBuilder.group({
    username: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]
  })

  signUp() {
    if(this.registrationForm.valid){
      let username=this.registrationForm.value.username || ''
      let email=this.registrationForm.value.email || ''
      let password=this.registrationForm.value.password || ''

      this.api.regiaster(username, email, password).subscribe((result: any) => {
           this.regisrationMessage=result.message
           this.regisrationMessageclass='alert alert-success'
           setTimeout(()=>{
            this.router.navigateByUrl("")
           },2000)
      },
        (result: any) => {
          console.log('inside error', result);
          this.regisrationMessage=result.error.message
          this.regisrationMessageclass='alert alert-danger'
          setTimeout(() => {
            this.registrationForm.reset()
            this.regisrationMessage=''
            this.regisrationMessageclass=''
          }, 2000); 
        }
      )
    }else{
      this.regisrationMessage='Please fill all field'
      this.regisrationMessageclass='alert alert-danger'
      setTimeout(() => {
        this.regisrationMessage=''
        this.regisrationMessageclass=''
      }, 2000); 
    }
  }
}
