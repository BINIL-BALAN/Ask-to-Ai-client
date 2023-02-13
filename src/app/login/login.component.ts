import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginMesageClass: string = ''
  loginMessage: string = ''
  logingState:boolean = false
  loginForm = this.fBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private api: ApiService, private fBuilder: FormBuilder, private router: Router) { }

  userLogin() {
    if (this.loginForm.valid) {
      this.logingState=true
      let useremail = this.loginForm.value.email || ''
      let password = this.loginForm.value.password || ''
      this.api.login(useremail, password).subscribe((result: any) => {
        localStorage.setItem('token', result.token)
        localStorage.setItem('username', result.username)
        setTimeout(() => {
          this.loginMessage = result.message
          this.loginMesageClass = 'alert alert-success text-center mx-3 mt-3'
          this.router.navigateByUrl('/home')
        }, 2000);
      },
        (result: any) => {
          
          setTimeout(()=>{
            this.logingState=false
            this.loginMessage = result.error.message
            this.loginMesageClass = 'alert alert-danger text-center mx-3 mt-3'
            setTimeout(() => {
               this.loginMessage = ''
              this.loginMesageClass = ''
              this.loginForm.reset()
            }, 4000);
          },2000)
        
        }
      )
    } else {
      this.loginMessage = 'Invalid inputs'
      this.loginMesageClass = 'alert alert-danger text-center mx-3 mt-3'

      setTimeout(() => {
        this.loginMessage = ''
        this.loginMesageClass = ''
      }, 2000);
    }
  }
}
